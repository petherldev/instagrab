import { useState } from 'react';
import { Download, Link as LinkIcon, Clipboard, AlertCircle, CheckCircle, Image, Video, Play, Camera } from 'lucide-react';
import clsx from 'clsx';

interface MediaItem {
  id: string;
  type: 'photo' | 'video' | 'reel' | 'story';
  thumbnail: string;
  downloadUrl: string;
  title?: string;
}

export default function MediaDownloader() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handlePasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
      setError('');
    } catch (err) {
      setError('Failed to read from clipboard. Please paste manually.');
    }
  };

  const validateInstagramUrl = (url: string): boolean => {
    const instagramRegex = /^https?:\/\/(www\.)?(instagram\.com|instagr\.am)\/(p|reel|stories|tv)\/[A-Za-z0-9_-]+/;
    return instagramRegex.test(url);
  };

  const handleAnalyze = async () => {
    if (!url.trim()) {
      setError('Please enter an Instagram URL');
      return;
    }

    if (!validateInstagramUrl(url)) {
      setError('Please enter a valid Instagram URL');
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess('');
    setMediaItems([]);

    try {
      // Simulate API call - In real implementation, this would call your backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock data for demonstration
      const mockMediaItems: MediaItem[] = [
        {
          id: '1',
          type: 'photo',
          thumbnail: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300',
          downloadUrl: '#',
          title: 'Instagram Photo'
        },
        {
          id: '2',
          type: 'video',
          thumbnail: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=300',
          downloadUrl: '#',
          title: 'Instagram Video'
        }
      ];

      setMediaItems(mockMediaItems);
      setSuccess('Media found! Click download buttons below.');
    } catch (err) {
      setError('Failed to analyze the URL. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async (item: MediaItem) => {
    // In real implementation, this would trigger the actual download
    setSuccess(`Downloading ${item.type}...`);
    
    // Simulate download
    setTimeout(() => {
      setSuccess(`${item.type} downloaded successfully!`);
    }, 1000);
  };

  const getMediaIcon = (type: string) => {
    switch (type) {
      case 'photo':
        return <Image className="h-4 w-4" />;
      case 'video':
        return <Video className="h-4 w-4" />;
      case 'reel':
        return <Play className="h-4 w-4" />;
      case 'story':
        return <Camera className="h-4 w-4" />;
      default:
        return <Download className="h-4 w-4" />;
    }
  };

  const isValidUrl = validateInstagramUrl(url);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* URL Input Section */}
      <div className="card">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Download Instagram Media
            </h2>
            <p className="text-gray-600">
              Paste an Instagram URL to download photos, videos, reels, or stories
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://www.instagram.com/p/..."
                className={clsx(
                  'input-field pl-10',
                  url && isValidUrl && 'has-link'
                )}
                onKeyPress={(e) => e.key === 'Enter' && handleAnalyze()}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handlePasteFromClipboard}
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <Clipboard className="h-4 w-4" />
                <span>Paste from Clipboard</span>
              </button>
              
              <button
                onClick={handleAnalyze}
                disabled={isLoading || !url.trim()}
                className={clsx(
                  'btn-primary flex items-center justify-center space-x-2 flex-1',
                  (isLoading || !url.trim()) && 'opacity-50 cursor-not-allowed'
                )}
              >
                {isLoading ? (
                  <>
                    <div className="loading-spinner" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4" />
                    <span>Analyze URL</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Status Messages */}
          {error && (
            <div className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 animate-slide-up">
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 animate-slide-up">
              <CheckCircle className="h-5 w-5 flex-shrink-0" />
              <span>{success}</span>
            </div>
          )}
        </div>
      </div>

      {/* Media Items */}
      {mediaItems.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">Available Media</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mediaItems.map((item) => (
              <div key={item.id} className="card">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg flex items-center justify-center">
                      {getMediaIcon(item.type)}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 capitalize">
                      {item.type}
                    </h4>
                    <p className="text-sm text-gray-500">{item.title}</p>
                  </div>
                  
                  <button
                    onClick={() => handleDownload(item)}
                    className="btn-primary py-2 px-4 text-sm"
                  >
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}