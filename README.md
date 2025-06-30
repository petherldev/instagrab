# InstaGrab

InstaGrab is a modern, free Instagram media downloader that allows users to easily download photos, videos, reels, IGTV content, and public stories from Instagram. Built with a clean, minimalist interface and mobile-first approach, InstaGrab provides a fast, secure, and user-friendly experience without requiring registration or fees.

> \[!CAUTION]
> Under development! This project is currently in the alpha stage and may contain bugs or incomplete features. Use at your own risk.

## Features
- **Multi-Format Support**: Download Instagram photos, videos, reels, IGTV content, and public stories
- **High-Quality Downloads**: Preserve original media quality during download
- **No Registration Required**: Use the service immediately without creating an account
- **Mobile-First Design**: Responsive interface optimized for all devices
- **Real-Time URL Validation**: Visual feedback with pink highlighting for valid Instagram URLs
- **Clipboard Integration**: One-click paste functionality from clipboard
- **Fast Processing**: Lightning-fast media analysis and download preparation
- **Privacy Focused**: No data storage or tracking of user activity
- **Modern UI/UX**: Clean design with smooth animations and hover effects

## Installation

### Prerequisites
- Node.js (version 20.0.0 or higher)
- npm or yarn package manager

### Setting Up Development Environment
```bash
# Clone the repository
git clone https://github.com/petherldev/instagrab.git

# Navigate to project directory
cd instagrab

# Install dependencies
npm install

# Run development server
npm run dev
```

## Usage

### Basic Usage
1. **Copy Instagram URL**: Navigate to any Instagram post, reel, or story and copy the URL
2. **Paste URL**: Visit InstaGrab and paste the URL into the input field (text will turn pink when valid)
3. **Analyze Content**: Click "Analyze URL" to detect available media
4. **Download Media**: Click the download button next to each media item you want to save

### Supported URL Formats
```
https://www.instagram.com/p/[POST_ID]/
https://www.instagram.com/reel/[REEL_ID]/
https://www.instagram.com/stories/[USERNAME]/[STORY_ID]/
https://www.instagram.com/tv/[IGTV_ID]/
```

### Example Implementation
```javascript
// URL validation function used in the application
const validateInstagramUrl = (url) => {
  const instagramRegex = /^https?:\/\/(www\.)?(instagram\.com|instagr\.am)\/(p|reel|stories|tv)\/[A-Za-z0-9_-]+/;
  return instagramRegex.test(url);
};
```

## Development

### Tech Stack
- **Frontend**: React 18 with Remix framework
- **Styling**: Tailwind CSS with custom components
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Language**: TypeScript
- **Deployment**: Node.js compatible


### Building
```bash
# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run typecheck
```

### Key Components

#### MediaDownloader Component
The core component handling URL input, validation, and download functionality:
- Real-time URL validation with visual feedback
- Clipboard integration
- Loading states and error handling
- Media preview and download interface

#### Responsive Design
- Mobile-first approach with breakpoints
- Smooth animations and transitions
- Accessible navigation and interactions
- Modern card-based layout system

## API Reference

### URL Validation
```typescript
validateInstagramUrl(url: string): boolean
```
Validates if the provided URL is a valid Instagram media URL.
- `url` (string): The URL to validate
- Returns: `boolean` - true if valid Instagram URL

### Media Analysis
```typescript
handleAnalyze(): Promise<void>
```
Analyzes the provided Instagram URL and extracts available media information.
- Validates URL format
- Fetches media metadata
- Updates UI with available download options

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Maintain responsive design principles
- Add proper error handling
- Include loading states for async operations
- Write clean, documented code

## License
This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

```
Copyright 2025 petherldev

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

## Contact
- **Developer**: petherldev
- **Email**: [petherl@protonmail.com](mailto:petherl@protonmail.com)
- **GitHub**: [https://github.com/petherldev](https://github.com/petherldev)
- **Project Link**: [https://github.com/petherldev/instagrab](https://github.com/petherldev/instagrab)

## Acknowledgments
- **Remix Framework** - For the excellent full-stack React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide React** - For the beautiful icon library
- **Pexels** - For providing high-quality stock images used in demonstrations
- **Instagram** - For the platform that inspired this tool

> \[!CAUTION]
> InstaGrab is designed for personal use only. Users are responsible for respecting content creators' rights and  Instagram's terms of service. This tool should only be used to download content you have permission to save. Always respect copyright and intellectual property rights.

## Roadmap
- [ ] Quality selection options
- [ ] Browser extension
- [ ] API rate limiting improvements
- [ ] Enhanced error messaging
- [ ] Multi-language support
