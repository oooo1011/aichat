import { Redis } from '@upstash/redis';
import env from '../config/env';

class CacheService {
  private redis: Redis;

  constructor() {
    this.redis = new Redis({
      url: env.UPSTASH_REDIS_REST_URL,
      token: env.UPSTASH_REDIS_REST_TOKEN,
    });
  }

  async get(key: string) {
    try {
      return await this.redis.get(key);
    } catch (error) {
      console.error('Redis get error:', error);
      throw error;
    }
  }

  async set(key: string, value: any, expireInSeconds?: number) {
    try {
      if (expireInSeconds) {
        return await this.redis.set(key, value, { ex: expireInSeconds });
      }
      return await this.redis.set(key, value);
    } catch (error) {
      console.error('Redis set error:', error);
      throw error;
    }
  }

  async del(key: string) {
    try {
      return await this.redis.del(key);
    } catch (error) {
      console.error('Redis delete error:', error);
      throw error;
    }
  }

  async exists(key: string) {
    try {
      return await this.redis.exists(key);
    } catch (error) {
      console.error('Redis exists error:', error);
      throw error;
    }
  }

  // 用于限流的方法
  async rateLimit(key: string, limit: number, window: number): Promise<boolean> {
    const current = await this.redis.incr(key);
    if (current === 1) {
      await this.redis.expire(key, window);
    }
    return current <= limit;
  }
}

export default new CacheService();
