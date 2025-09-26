import React from 'react';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">BlueLeaf Studio</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              保育園・幼稚園の業務効率化を通じて、<br />
              先生方と子どもたちの時間を大切にします。
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">お問い合わせ</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span>03-1234-5678</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span>info@blueleaf-studio.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                <span>東京都渋谷区〇〇 1-2-3</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">サービス</h3>
            <div className="space-y-2">
              <div className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                業務効率化ツール
              </div>
              <div className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                保護者連携システム
              </div>
              <div className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                カスタム開発
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />
        
        <div className="text-center text-gray-400">
          <p>&copy; 2025 BlueLeaf Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};