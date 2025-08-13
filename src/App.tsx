import React, { useState } from 'react';
import { Play, ExternalLink, Mail, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(0);

  // Sample videos - replace with your actual Vimeo video IDs and info
  const videos = [
    {
      id: '1107255440',
      title: 'AI-Powered Content Sizzle Reel',
      description: 'Compilation of custom AI-generated content.',
      category: 'AI Content',
      thumbnail: '/Thumbnail_Images/AI-ContentThumbnail-2.jpg',
      year: '2024-2025'
    },
    {
      id: '789123456',
      title: 'Digital Content Sizzle Reel',
      description: 'Compilation of digital platform content.',
      category: 'Digital Content',
      thumbnail: '/Thumbnail_Images/DigitalContentThumb--TEMP.jpg',
      year: '2023'

    },
    {
      id: '789123456',
      title: 'Corporate Content Sizzle Reel',
      description: 'Compilation of corporate content.',
      category: 'Corporate Content',
      thumbnail: '/Thumbnail_Images/CorporateContentThumb--TEMP.jpg',
      year: '2024'
    },
    {
      id: '710342045',
      title: 'Motion Graphics',
      description: 'Compilation of branded opens, lower thirds and motion graphics for national television.',
      category: 'Adobe AfterEffects',
      thumbnail: '/Thumbnail_Images/MauryGraphicsThumb.jpg',
      year: '2010-2022'
    },
    // {
    //   id: '321654987',
    //   title: 'Event Coverage',
    //   description: 'Dynamic event coverage with multiple camera angles.',
    //   category: 'Event',
    //   thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=225&fit=crop',
    //   year: '2024'
    // },
    // {
    //   id: '654987321',
    //   title: 'Product Showcase',
    //   description: 'High-end product visualization with motion graphics.',
    //   category: 'Product',
    //   thumbnail: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=225&fit=crop',
    //   year: '2023'
    // }
  ];//

  const categories = ['All', ...new Set(videos.map(video => video.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredVideos = selectedCategory === 'All' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  const videosPerPage = 4;
  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);
  const startIndex = currentPage * videosPerPage;
  const currentVideos = filteredVideos.slice(startIndex, startIndex + videosPerPage);

  const openVideo = (video: any) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Brian Thomas
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            AI-powered Video Content Creator 
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto text-gray-400">
            Your brand needs attention grabbing videos, graphics, images, logos and websites that use AI-powered creativity.
          </p>
          <div className="flex justify-center space-x-6">
        {/* <button 
            onClick={() => {
            navigator.clipboard.writeText('btcontentai@gmail.com');
            alert('Email copied to clipboard!');
          }}
          className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-colors">
          <Mail size={20} />
          <span>Copy Email</span>
        </button> */}
            <a href="#portfolio" className="flex items-center space-x-2 border border-white/30 hover:bg-white/10 px-6 py-3 rounded-full transition-colors">
              <Play size={20} />
              <span>View Work</span>
            </a>
            <a href="#about" className="flex items-center space-x-2 border border-white/30 hover:bg-white/10 px-6 py-3 rounded-full transition-colors">
              <Play size={20} />
              <span>View Tools</span>
            </a>
          </div>
        </div>
      </header>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Featured Work
          </h2>
          <p className="text-xl text-center mb-12 text-gray-400 max-w-2xl mx-auto">
            A curated selection of projects spanning broadcast, digital, and corporate content with AI-enhanced production.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12 justify-items-center">
            {currentVideos.map((video) => (
              <div
                key={video.id}
                className="group cursor-pointer bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105"
                onClick={() => openVideo(video)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Play className="text-white ml-1" size={24} />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    {video.year}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {video.title}
                    </h3>
                    <span className="text-sm text-purple-400 bg-purple-400/20 px-2 py-1 rounded">
                      {video.category}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="hidden flex justify-center items-center space-x-4">
              <button
                onClick={prevPage}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
                disabled={currentPage === 0}
              >
                <ChevronLeft size={24} />
              </button>
              <span className="text-white">
                {currentPage + 1} of {totalPages}
              </span>
              <button
                onClick={nextPage}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
                disabled={currentPage === totalPages - 1}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">AI Tools</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Agentic AI, Eleven Labs, ChatGPT, Claude, Figma AI, Kling, Luma AI, Midjourney, Runway, Sora, Synthesia, Topaz, Veo, Vibe Coding, Weavy </p>
          <h2 className="text-4xl font-bold mb-8 text-white">Video Tools</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Adobe Premiere Pro, Adobe AfterEffects, Avid Media Composer, Davinci Resolve, DSLR/Mirrorless cameras(Canon, Sony, Blackmagic), Media Encoding, OBS Studio, Studio Lighting, Teleprompting
          </p>
          <h2 className="text-4xl font-bold mb-8 text-white">Coding Website Tools</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            CSS, DevTools, GitHub, HTML, JavaScript, React, Netlify, MongoDB, Next.JS, Node.JS, SQL, VS Code
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/brian-thomas-video/" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:btcontentai@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl bg-black rounded-2xl overflow-hidden">
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              ×
            </button>
            <div className="aspect-video">
              <iframe
                src={`https://player.vimeo.com/video/${selectedVideo.id}?autoplay=1&title=0&byline=0&portrait=0`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={`Video: ${selectedVideo.title}`}
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-6 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedVideo.title}</h3>
              <p className="text-gray-300 mb-4">{selectedVideo.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-purple-400 bg-purple-400/20 px-3 py-1 rounded-full text-sm">
                  {selectedVideo.category}
                </span>
                <a
                  href={`https://vimeo.com/${selectedVideo.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <span>View on Vimeo</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
