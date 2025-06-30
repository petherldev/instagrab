import { Copy, Link as LinkIcon, Download, CheckCircle } from 'lucide-react';

export default function HowToUse() {
  const steps = [
    {
      icon: Copy,
      title: 'Copy Instagram URL',
      description: 'Go to Instagram and copy the URL of the post, reel, or story you want to download.',
      details: 'On mobile: Tap the three dots (⋯) and select "Copy Link". On desktop: Copy the URL from your browser\'s address bar.'
    },
    {
      icon: LinkIcon,
      title: 'Paste the URL',
      description: 'Paste the Instagram URL into the input field above.',
      details: 'You can paste manually or use the "Paste from Clipboard" button for convenience.'
    },
    {
      icon: CheckCircle,
      title: 'Analyze Content',
      description: 'Click "Analyze URL" to detect available media content.',
      details: 'Our system will analyze the URL and show you all downloadable content including photos, videos, and more.'
    },
    {
      icon: Download,
      title: 'Download Media',
      description: 'Click the download button next to each media item you want to save.',
      details: 'Downloads will start automatically and be saved to your device\'s default download folder.'
    }
  ];

  return (
    <section id="how-to-use" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How to Use InstaGrab
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download Instagram content in just 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="card text-center h-full">
                  <div className="mb-4">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="bg-primary-100 text-primary-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-3">
                    {step.description}
                  </p>
                  
                  <p className="text-sm text-gray-500">
                    {step.details}
                  </p>
                </div>

                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-300 to-primary-200" />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Supported Content Types
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="bg-white px-3 py-1 rounded-full">📸 Photos</span>
              <span className="bg-white px-3 py-1 rounded-full">🎥 Videos</span>
              <span className="bg-white px-3 py-1 rounded-full">🎬 Reels</span>
              <span className="bg-white px-3 py-1 rounded-full">📺 IGTV</span>
              <span className="bg-white px-3 py-1 rounded-full">📱 Stories</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}