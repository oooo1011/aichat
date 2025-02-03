# AI Chat Application

一个基于 React 和 Node.js 的 AI 聊天应用，支持多种 AI 模型。

## 功能特点

- 支持多种 AI 模型（DeepSeek、Groq、Ollama）
- 现代化的用户界面
- 实时聊天功能
- TypeScript 支持
- 响应式设计

## 技术栈

### 前端
- React 18
- TypeScript
- Tailwind CSS
- React Router v6

### 后端
- Node.js
- Express
- PostgreSQL (Neon)
- Docker

## 开始使用

1. 克隆仓库
```bash
git clone [repository-url]
cd aichat
```

2. 安装依赖
```bash
# 前端
cd frontend
npm install

# 后端
cd ../backend
npm install
```

3. 配置环境变量
```bash
# 后端
cp .env.example .env
# 编辑 .env 文件，填入必要的配置
```

4. 启动开发服务器
```bash
# 前端
cd frontend
npm run dev

# 后端
cd backend
npm run dev
```

## 项目结构

```
aichat/
├── frontend/          # React 前端
│   ├── src/
│   │   ├── pages/    # 页面组件
│   │   ├── components/# 可重用组件
│   │   └── ...
│   └── ...
├── backend/          # Node.js 后端
│   ├── src/
│   │   ├── routes/  # API 路由
│   │   ├── models/  # 数据模型
│   │   └── ...
│   └── ...
└── ...
```

## 贡献指南

欢迎提交 Pull Request 和 Issue！

## 许可证

MIT
