import { useState } from 'react';
import { Shield, Clock, CreditCard, CheckCircle2 } from 'lucide-react';

export default function SignupSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="signup" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Grow Faster?
            </h2>
            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
              Join 50+ brands across 30+ industries who trust DigiChakra360 to scale their digital presence.
            </p>
            <p className="text-lg text-gray-700 mb-8 font-medium italic">
              Kyuki Aapki Jeet mein, Hamari jeet hain!
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Shield, text: 'No hidden fees' },
                { icon: Clock, text: 'Cancel anytime' },
                { icon: CreditCard, text: '100% secure - No credit card required' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <p className="text-sm text-blue-900 font-semibold mb-2">What happens after your trial?</p>
              <p className="text-sm text-blue-700">
                After 3 days, you can choose to continue with one of our flexible plans or simply walk away — no obligations, no automatic charges.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            {!submitted ? (
              <>
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Start Your Free Trial
                  </h3>
                  <p className="text-gray-600">No credit card required</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="businessType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Business Type
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      required
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all appearance-none bg-white"
                    >
                      <option value="">Select your business type</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="saas">SaaS</option>
                      <option value="agency">Agency</option>
                      <option value="consulting">Consulting</option>
                      <option value="retail">Retail</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Claim My Free Trial
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By signing up, you agree to our Terms of Service and Privacy Policy
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Welcome Aboard!
                </h3>
                <p className="text-gray-600 mb-6">
                  Check your email for next steps. We're excited to help you grow your digital presence!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Submit another form
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '50+', label: 'Brands Scaled' },
            { number: '30+', label: 'Industries Served' },
            { number: '5:1', label: 'Avg. ROAS' },
            { number: '1CR+', label: 'Ad Spend Managed' }
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
