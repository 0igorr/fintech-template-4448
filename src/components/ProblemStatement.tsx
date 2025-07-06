
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
    <section className="py-16 px-6 md:px-12" style={{ backgroundColor: '#F9F6F3' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Cold Outreach Doesn't Work Anymore.<br />AI Organic Outbound Does.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Today's buyers expect personalized, meaningful engagement. Traditional cold outreach interrupts, 
            while AI organic outbound builds relationships before you even reach out.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {/* Traditional Cold Outbound - Left Column */}
          <div className="relative bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-b-4 border-b-red-500">
            {/* Red X Icon - Top Right */}
            <div className="absolute top-4 right-4">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <X className="w-5 h-5 text-red-600" />
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Traditional Cold Outbound</h3>
              <p className="text-gray-600">The outdated approach that's failing businesses</p>
            </div>

            {/* Negative Points */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <X className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">1% cold email response rates</h4>
                  <p className="text-gray-600">Millions of emails sent, almost all ignored</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <X className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">80% of calls screened out</h4>
                  <p className="text-gray-600">Decision makers don't take cold calls</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <X className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">No relationship before outreach</h4>
                  <p className="text-gray-600">Cold outreach feels impersonal and salesy</p>
                </div>
              </div>
            </div>

            {/* Bottom Icons */}
            <div className="flex justify-center gap-6 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg">
                <PhoneCall className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg">
                <Mail className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg">
                <MessageSquare className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>

          {/* AI Organic Outbound - Right Column */}
          <div className="relative bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-b-4 border-b-purple-600">
            {/* Purple Check Icon - Top Right */}
            <div className="absolute top-4 right-4">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-purple-600" />
              </div>
            </div>

            {/* Convrt.ai Badge */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                Convrt.ai
              </span>
            </div>

            <div className="mb-8 mt-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Organic Outbound</h3>
              <p className="text-gray-600">The modern approach that builds relationships</p>
            </div>

            {/* Positive Points */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">15x higher conversion rates</h4>
                  <p className="text-gray-600">Build trust before you reach out</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Key touchpoints and discussions</h4>
                  <p className="text-gray-600">Tracks the entire buyer's journey</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Fully automated growth hacking</h4>
                  <p className="text-gray-600">Enterprise-grade AI engagement</p>
                </div>
              </div>
            </div>

            {/* Bottom Icons */}
            <div className="flex justify-center gap-6 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
