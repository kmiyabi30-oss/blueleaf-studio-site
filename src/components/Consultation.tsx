import React from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';

export const Consultation: React.FC = () => {
  return (
    <section id="consultation" className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">ご相談はこちらから</h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
          プランや料金の詳細についてはお気軽にお問い合わせください。
          専門スタッフが丁寧にサポートいたします。
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-10 py-5 bg-green-500 text-white font-semibold rounded-xl shadow-lg hover:bg-green-400 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            LINEで無料相談
          </a>
          
          <div className="flex items-center space-x-8 text-lg">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span>03-1234-5678</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span>info@blueleaf-studio.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};