
import React, { useState, useEffect } from 'react';
import { X, Check, PhoneCall, Mail, MessageSquare, Users, Zap, BarChart3 } from 'lucide-react';

const ProblemStatement = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-6 md:px-12" style={{ backgroundColor: '#F9F6F3' }}>
      <div className="max-w-6xl mx-auto">
        {/* Title and Subtitle */}
        <div className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cold Outreach Doesn't Work Anymore. AI Organic Outbound Does.
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Buyers expect personalized engagement.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {/* Traditional Cold Outbound Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 relative border-b-4 hover:translate-y-[-5px] hover:shadow-2xl transition-all duration-300 group" style={{ borderBottomColor: '#EA384C' }}>
            {/* Red X Icon */}
            <div className="absolute top-4 right-4">
              <X size={28} color="#EA384C" className="group-hover:scale-110 transition-transform duration-200" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-8 pr-8">
              Traditional Cold Outbound
            </h3>

            {/* Negative Points */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-3">
                <X size={20} color="#EA384C" className="mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-gray-900">1% cold email response rates</span>
                  <p className="text-gray-600 mt-1">Millions of emails sent, almost all ignored</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <X size={20} color="#EA384C" className="mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-gray-900">80% of calls screened out</span>
                  <p className="text-gray-600 mt-1">Decision makers don't take cold calls</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <X size={20} color="#EA384C" className="mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-gray-900">No relationship before outreach</span>
                  <p className="text-gray-600 mt-1">Cold outreach feels impersonal and salesy</p>
                </div>
              </div>
            </div>

            {/* Bottom Icons */}
            <div className="flex justify-start gap-6 pt-6 border-t-2" style={{ borderTopColor: '#EA384C' }}>
              <PhoneCall size={24} color="#EA384C" className="hover:scale-110 transition-transform duration-200" />
              <Mail size={24} color="#EA384C" className="hover:scale-110 transition-transform duration-200" />
              <MessageSquare size={24} color="#EA384C" className="hover:scale-110 transition-transform duration-200" />
            </div>
          </div>

          {/* AI Organic Outbound Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 relative border-b-4 hover:translate-y-[-5px] hover:shadow-2xl transition-all duration-300 group" style={{ borderBottomColor: '#6936F5' }}>
            {/* Purple Check Icon */}
            <div className="absolute top-4 right-4">
              <Check size={28} color="#6936F5" className="group-hover:scale-110 transition-transform duration-200" />
            </div>

            {/* Convrt.ai Badge */}
            <div className="absolute top-4 right-16">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white" style={{ backgroundColor: '#6936F5' }}>
                Convrt.ai
              </span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-8 pr-20">
              AI Organic Outbound
            </h3>

            {/* Positive Points */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-3">
                <Check size={20} color="#6936F5" className="mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-gray-900">15x higher conversion rates</span>
                  <p className="text-gray-600 mt-1">Build trust before you reach out</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} color="#6936F5" className="mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-gray-900">Key touchpoints and discussions</span>
                  <p className="text-gray-600 mt-1">Tracks the entire buyer's journey</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} color="#6936F5" className="mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-gray-900">Fully automated growth hacking</span>
                  <p className="text-gray-600 mt-1">Enterprise-grade AI engagement</p>
                </div>
              </div>
            </div>

            {/* Bottom Icons */}
            <div className="flex justify-start gap-6 pt-6 border-t-2" style={{ borderTopColor: '#6936F5' }}>
              <Users size={24} color="#6936F5" className="hover:scale-110 transition-transform duration-200" />
              <Zap size={24} color="#6936F5" className="hover:scale-110 transition-transform duration-200" />
              <BarChart3 size={24} color="#6936F5" className="hover:scale-110 transition-transform duration-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
