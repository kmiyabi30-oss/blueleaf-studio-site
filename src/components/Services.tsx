import React from 'react';
import { Settings, MessageSquare, Code } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: '業務効率化ツール',
      description: '日々の園業務をスムーズにするクラウドシステムを提供します。出席管理、日報作成、スケジュール管理などを一元化できます。',
      color: 'blue'
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: '保護者連携システム',
      description: '保護者とのコミュニケーションを円滑にする仕組みをご用意しています。お知らせ配信、写真共有、個別連絡などが簡単に行えます。',
      color: 'green'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'カスタム開発',
      description: '園ごとのニーズに合わせたシステム開発にも対応しています。既存システムとの連携や独自機能の実装も可能です。',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-50',
          icon: 'bg-blue-600 text-white',
          hover: 'hover:bg-blue-100'
        };
      case 'green':
        return {
          bg: 'bg-green-50',
          icon: 'bg-green-600 text-white',
          hover: 'hover:bg-green-100'
        };
      case 'purple':
        return {
          bg: 'bg-purple-50',
          icon: 'bg-purple-600 text-white',
          hover: 'hover:bg-purple-100'
        };
      default:
        return {
          bg: 'bg-gray-50',
          icon: 'bg-gray-600 text-white',
          hover: 'hover:bg-gray-100'
        };
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">サービス</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            園の業務効率化を実現する3つの主要サービスをご提供しています
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div
                key={index}
                className={`${colors.bg} ${colors.hover} p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.icon} rounded-full mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};