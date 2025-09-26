import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Q. 導入までどのくらいかかりますか？',
      answer: '園の規模や状況によりますが、通常1〜2か月でご利用いただけます。初期設定やスタッフ研修も含めて、スムーズに導入できるようサポートいたします。'
    },
    {
      question: 'Q. サポートはありますか？',
      answer: 'はい。導入後も安心してお使いいただけるよう、継続的にサポートします。電話、メール、LINEでのサポートに加え、定期的な運用コンサルティングも行っています。'
    },
    {
      question: 'Q. 既存のシステムとの連携は可能ですか？',
      answer: '多くの既存システムとの連携が可能です。まずは現在お使いのシステムをお教えください。連携方法について詳しくご提案いたします。'
    },
    {
      question: 'Q. 料金体系はどのようになっていますか？',
      answer: '園の規模や必要な機能によって料金は変動します。月額制でご利用いただけ、初期費用は無料です。詳細はお気軽にお問い合わせください。'
    },
    {
      question: 'Q. データのセキュリティは大丈夫ですか？',
      answer: 'はい。個人情報保護法に準拠したセキュリティ対策を実装しており、データの暗号化、定期的なバックアップ、アクセス制御を徹底しています。'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 class="text-4xl font-bold mb-6">よくあるご質問</h2>
          <p className="text-xl text-gray-600">
            皆様からよくお寄せいただくご質問をまとめました
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-lg text-gray-800">{faq.question}</h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};