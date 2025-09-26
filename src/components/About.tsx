import React from 'react';
import { Heart, Users, Clock } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">私たちについて</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            BlueLeaf Studioは、園で働く先生方が子どもたちと過ごす時間を最大限確保できるよう、
            ITソリューションを通じて業務効率化を支援します。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-8 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">子ども第一</h3>
            <p className="text-gray-600">
              先生方が子どもたちとの時間を大切にできる環境づくりを最優先に考えます。
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">チーム連携</h3>
            <p className="text-gray-600">
              園のスタッフ全員がスムーズに連携できるシステムを提供します。
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-purple-50 hover:bg-purple-100 transition-colors duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-6">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">時短効果</h3>
            <p className="text-gray-600">
              日々の業務時間を大幅に短縮し、本質的な保育業務に集中できます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};