import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import MediaDownloader from "~/components/MediaDownloader";
import HowToUse from "~/components/HowToUse";
import About from "~/components/About";

export const meta: MetaFunction = () => {
  return [
    { title: "InstaGrab - Instagram Media Downloader" },
    { name: "description", content: "Download Instagram photos, videos, reels, and stories easily and quickly with InstaGrab - the best free Instagram downloader." },
    { name: "keywords", content: "instagram downloader, download instagram photos, download instagram videos, instagram reels downloader, instagram story downloader" },
    { property: "og:title", content: "InstaGrab - Instagram Media Downloader" },
    { property: "og:description", content: "Download Instagram photos, videos, reels, and stories easily and quickly" },
    { property: "og:type", content: "website" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
                Download Instagram
                <span className="block bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                  Media Instantly
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-slide-up">
                Save photos, videos, reels, and stories from Instagram with just one click. 
                Fast, free, and secure - no registration required.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 animate-slide-up">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-slow"></div>
                  <span>100% Free</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse-slow"></div>
                  <span>No Registration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse-slow"></div>
                  <span>High Quality</span>
                </div>
              </div>
            </div>

            <MediaDownloader />
          </div>
        </section>

        <HowToUse />
        <About />

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gradient-to-r from-primary-500 to-primary-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Help or Have Questions?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              We're here to help! Reach out to us for support, feedback, or feature requests.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:petherl@protonmail.com"
                className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-xl transition-all duration-200 transform hover:scale-105"
              >
                Send Email
              </a>
              <a
                href="https://github.com/petherldev"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-700 hover:bg-primary-800 text-white font-medium py-3 px-8 rounded-xl transition-all duration-200 transform hover:scale-105"
              >
                View GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}