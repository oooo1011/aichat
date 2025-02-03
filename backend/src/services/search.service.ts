import env from '../config/env';

export class SearchService {
  private tavilyApiKey: string;

  constructor() {
    this.tavilyApiKey = env.TAVILY_API_KEY;
  }

  async search(query: string, searchDepth: 'basic' | 'advanced' = 'basic') {
    try {
      const response = await fetch('https://api.tavily.com/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': this.tavilyApiKey,
        },
        body: JSON.stringify({
          query,
          search_depth: searchDepth,
          include_domains: [], // 可选：限制搜索的域名
          exclude_domains: [], // 可选：排除的域名
          max_results: 10,    // 可选：结果数量
        }),
      });

      if (!response.ok) {
        throw new Error(`Tavily API error: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Search service error:', error);
      throw error;
    }
  }

  async searchWithImages(query: string) {
    try {
      const response = await fetch('https://api.tavily.com/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': this.tavilyApiKey,
        },
        body: JSON.stringify({
          query,
          search_depth: 'advanced',
          include_images: true,
          max_results: 10,
        }),
      });

      if (!response.ok) {
        throw new Error(`Tavily API error: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Search service error:', error);
      throw error;
    }
  }
}

export default new SearchService();
