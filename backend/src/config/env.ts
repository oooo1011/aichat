import dotenv from 'dotenv';
import { z } from 'zod';

// 加载环境变量
dotenv.config();

// 环境变量验证模式
const envSchema = z.object({
  // Server
  PORT: z.string().default('5000'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),

  // Neon Database
  NEON_DB_URL: z.string().url(),
  NEON_DB_DIRECT_URL: z.string().url(),
  NEON_API_KEY: z.string(),

  // Upstash Redis
  UPSTASH_REDIS_REST_URL: z.string().url(),
  UPSTASH_REDIS_REST_TOKEN: z.string(),

  // Database
  DATABASE_URL: z.string(),

  // AI Model API Keys
  DEEPSEEK_API_KEY: z.string(),
  GROQ_API_KEY: z.string(),
  OLLAMA_API_URL: z.string().default('http://localhost:11434'),

  // Search API Keys
  TAVILY_API_KEY: z.string(),

  // JWT
  JWT_SECRET: z.string(),
  JWT_EXPIRES_IN: z.string().default('7d'),

  // Rate Limiting
  RATE_LIMIT_WINDOW: z.string().default('15m'),
  RATE_LIMIT_MAX_REQUESTS: z.string().default('100'),

  // CORS
  ALLOWED_ORIGINS: z.string().transform(str => str.split(',')),
});

// 验证环境变量
const env = envSchema.parse(process.env);

export default env;
