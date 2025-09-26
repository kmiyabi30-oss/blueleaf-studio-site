import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-lg mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">送信完了</h2>
            <p className="text-lg text-gray-600">
              お問い合わせありがとうございます。<br />
              2営業日以内にご返信いたします。
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">お問い合わせ</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ご質問やご相談は、以下のフォームからお気軽にご連絡ください。
            専門スタッフが丁寧にお答えいたします。
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="山田 太郎"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="yamada@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              お問い合わせ内容 <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              placeholder="お問い合わせ内容をご記入ください..."
            />
          </div>
          
          <button
            type="submit"
            className="group w-full py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center"
          >
            <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
            送信する
          </button>
        </form>
      </div>
    </section>
  );
};