import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const models = [
  { id: 'deepseek', name: 'DeepSeek' },
  { id: 'groq', name: 'Groq' },
  { id: 'ollama', name: 'Ollama' }
];

const Home: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<string>('');
  const navigate = useNavigate();

  const handleStartChat = () => {
    if (selectedModel) {
      navigate('/chat', { state: { model: selectedModel } });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to AI Chat
          </h1>
          <p className="text-gray-600 mb-8">
            Select a model and start chatting!
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select AI Model
            </label>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="">Choose a model...</option>
              {models.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <button
              onClick={handleStartChat}
              disabled={!selectedModel}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                ${selectedModel ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-400 cursor-not-allowed'}
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            >
              Start Chatting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
