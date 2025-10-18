import { FileSearch, TrendingUp, Users } from 'lucide-react';

const features = [
  {
    icon: FileSearch,
    title: 'Digital Audit & Strategy Blueprint',
    description: 'Get a comprehensive analysis of your current digital presence with actionable insights and a customized growth roadmap tailored to your business goals.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: TrendingUp,
    title: 'Ad Campaign Mockups & Performance Insights',
    description: 'Preview professional ad creatives designed for your brand, complete with projected performance metrics and optimization recommendations.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users,
    title: 'Personalized Growth Consultation',
    description: 'Connect with our digital marketing experts for a one-on-one strategy session to unlock your brand\'s full potential and accelerate growth.',
    gradient: 'from-orange-500 to-yellow-500'
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What You'll Get in Your Free 3-Day Trial
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to experience real digital growth — completely free, no strings attached
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                  <span>Included in trial</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Plus, Get Access to Our Premium Tools
            </h3>
            <p className="text-blue-100 text-lg mb-8">
              Social media scheduler, SEO analyzer, competitor tracking, and more — all included in your trial
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['SEO Tools', 'Analytics Dashboard', 'Content Planner', 'A/B Testing'].map((tool) => (
                <span key={tool} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium border border-white/30">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
