import env from '../config/env';

export class AIService {
  private deepseekApiKey: string;
  private groqApiKey: string;
  private ollamaApiUrl: string;

  constructor() {
    this.deepseekApiKey = env.DEEPSEEK_API_KEY;
    this.groqApiKey = env.GROQ_API_KEY;
    this.ollamaApiUrl = env.OLLAMA_API_URL;
  }

  async chatWithDeepSeek(messages: any[]) {
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.deepseekApiKey}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages,
      }),
    });

    return await response.json();
  }

  async chatWithGroq(messages: any[]) {
    const response = await fetch('https://api.groq.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.groqApiKey}`,
      },
      body: JSON.stringify({
        model: 'mixtral-8x7b-32768',
        messages,
      }),
    });

    return await response.json();
  }

  async chatWithOllama(messages: any[]) {
    const response = await fetch(`${this.ollamaApiUrl}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama2',
        messages,
      }),
    });

    return await response.json();
  }
}

export default new AIService();
