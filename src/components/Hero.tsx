import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-green-50 py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          園の業務を <span className="text-blue-600">効率化</span><br />
          子どもとの時間を <span className="text-green-600">大切に</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
          BlueLeaf Studioは、保育園・幼稚園の皆様が本当に大切にしたい「子どもたちとの時間」を増やすために、最新のテクノロジーで業務効率化をサポートします。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-8 py-4 bg-green-500 text-white font-semibold rounded-xl shadow-lg hover:bg-green-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            LINEで無料相談
          </a>
          <button
            onClick={scrollToServices}
            className="group inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-500 font-semibold rounded-xl shadow-lg hover:bg-blue-50 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            サービス詳細を見る
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};