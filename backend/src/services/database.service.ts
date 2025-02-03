import { Pool } from 'pg';
import env from '../config/env';

class DatabaseService {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      connectionString: env.NEON_DB_URL,
      ssl: {
        rejectUnauthorized: true,
      },
    });
  }

  async query(text: string, params?: any[]) {
    try {
      const start = Date.now();
      const res = await this.pool.query(text, params);
      const duration = Date.now() - start;
      console.log('执行查询', { text, duration, rows: res.rowCount });
      return res;
    } catch (error) {
      console.error('数据库查询错误:', error);
      throw error;
    }
  }

  async getClient() {
    const client = await this.pool.connect();
    const query = client.query;
    const release = client.release;

    // 设置自动释放客户端
    client.release = () => {
      client.query = query;
      client.release = release;
      return release.apply(client);
    };

    return client;
  }
}

export default new DatabaseService();
