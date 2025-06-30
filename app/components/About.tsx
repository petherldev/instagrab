import { Shield, Zap, Heart, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Download Instagram content in seconds with our optimized processing system.'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Your privacy is our priority. We don\'t store your data or downloaded content.'
    },
    {
      icon: Heart,
      title: 'Free to Use',
      description: 'Completely free service with no hidden fees, registration, or limitations.'
    },
    {
      icon: Users,
      title: 'User Friendly',
      description: 'Simple, intuitive interface designed for users of all technical levels.'
    }
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About InstaGrab
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The most reliable and user-friendly Instagram media downloader
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="card text-center">
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
            </div>
            
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-center mb-6">
                InstaGrab was created to provide a simple, reliable way to download and save Instagram content 
                for personal use. We believe in making technology accessible to everyone, which is why our 
                service is completely free and easy to use.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">What We Do</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Download Instagram photos and videos</li>
                    <li>• Support for Reels and IGTV content</li>
                    <li>• Access to public Stories</li>
                    <li>• High-quality media preservation</li>
                    <li>• Fast and reliable processing</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">What We Don't Do</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Store your personal information</li>
                    <li>• Keep copies of downloaded content</li>
                    <li>• Require account registration</li>
                    <li>• Access private or protected content</li>
                    <li>• Charge any fees or subscriptions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-xl">
            <Heart className="h-5 w-5" />
            <span className="font-medium">Made with love for the community</span>
          </div>
        </div>
      </div>
    </section>
  );
}