import React, { useState, useCallback } from 'react';
import { RefreshCw, Copy, Languages, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { generateLimerick, type Language, type UILanguage } from './limerick-generator';
import { translations, type TranslationKey } from './translations';

function App() {
  const [limerickHistory, setLimerickHistory] = useState<string[][]>([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [limerickLanguage, setLimerickLanguage] = useState<Language>('chinese');
  const [uiLanguage, setUILanguage] = useState<UILanguage>('chinese');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const t = (key: TranslationKey): string => translations[uiLanguage][key];

  const currentLimerick = currentIndex >= 0 ? limerickHistory[currentIndex] : [];

  const handleGenerate = useCallback(async () => {
    setIsGenerating(true);
    // Add a small delay for animation effect
    setTimeout(() => {
      const newLimerick = generateLimerick(limerickLanguage);
      setLimerickHistory(prev => [...prev, newLimerick]);
      setCurrentIndex(prev => prev + 1);
      setIsGenerating(false);
    }, 300);
  }, [limerickLanguage]);

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex < limerickHistory.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, limerickHistory.length]);

  const handleCopy = useCallback(async () => {
    if (currentLimerick.length === 0) return;
    
    try {
      await navigator.clipboard.writeText(currentLimerick.join('\n'));
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, [currentLimerick]);

  // Generate initial limerick on first load
  React.useEffect(() => {
    handleGenerate();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-amber-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-red-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Language Controls */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          {/* UI Language Switch */}
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg p-2 shadow-sm">
            <Globe className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">{t('uiLanguage')}:</span>
            <div className="flex bg-gray-100 rounded-md p-1">
              {(['chinese', 'english'] as UILanguage[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setUILanguage(lang)}
                  className={`px-3 py-1 text-sm font-medium rounded transition-all duration-200 ${
                    uiLanguage === lang
                      ? 'bg-white shadow-sm text-amber-600'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {lang === 'chinese' ? '中文' : 'English'}
                </button>
              ))}
            </div>
          </div>

          {/* Content Language Switch */}
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg p-2 shadow-sm">
            <Languages className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">{t('contentLanguage')}:</span>
            <div className="flex bg-gray-100 rounded-md p-1">
              {(['chinese', 'english'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLimerickLanguage(lang)}
                  className={`px-3 py-1 text-sm font-medium rounded transition-all duration-200 ${
                    limerickLanguage === lang
                      ? 'bg-white shadow-sm text-blue-600'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {lang === 'chinese' ? '中文' : 'English'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Limerick Display */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 mb-8 border border-white/20">
          {/* Navigation Header */}
          {limerickHistory.length > 1 && (
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
              <button
                onClick={handlePrevious}
                disabled={currentIndex <= 0}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 hover:bg-gray-50 rounded-lg"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="text-sm font-medium">{t('previous')}</span>
              </button>
              
              <div className="text-sm text-gray-500 font-medium">
                {currentIndex + 1} / {limerickHistory.length}
              </div>
              
              <button
                onClick={handleNext}
                disabled={currentIndex >= limerickHistory.length - 1}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 hover:bg-gray-50 rounded-lg"
              >
                <span className="text-sm font-medium">{t('next')}</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          <div className={`min-h-[200px] flex items-center justify-center ${
            limerickLanguage === 'chinese' ? 'text-xl md:text-2xl leading-relaxed' : 'text-lg md:text-xl leading-relaxed'
          }`}>
            {currentLimerick.length === 0 ? (
              <div className="text-gray-400 animate-pulse">{t('generating')}</div>
            ) : (
              <div className={`text-center space-y-2 ${
                limerickLanguage === 'chinese' ? 'font-medium' : 'font-serif'
              } transition-all duration-500 ${isGenerating ? 'opacity-50' : 'opacity-100'}`}>
                {currentLimerick.map((line, index) => (
                  <div
                    key={index}
                    className={`transform transition-all duration-500 delay-${index * 100} ${
                      isGenerating ? 'translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
                    } ${
                      index === 0 || index === 1 || index === 4 
                        ? 'text-amber-700' 
                        : 'text-blue-700 text-base md:text-lg ml-8'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {line}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="group relative px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            <div className="flex items-center gap-2">
              <RefreshCw className={`w-5 h-5 transition-transform duration-300 ${
                isGenerating ? 'animate-spin' : 'group-hover:rotate-180'
              }`} />
              <span>{isGenerating ? t('generating') : t('generateNew')}</span>
            </div>
          </button>

          <button
            onClick={handleCopy}
            disabled={currentLimerick.length === 0}
            className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            <div className="flex items-center gap-2">
              <Copy className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
              <span>{isCopied ? t('copied') : t('copy')}</span>
            </div>
            {isCopied && (
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded animate-fade-in">
                {t('copied')}!
              </div>
            )}
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500">
          <p className="text-sm">
            {t('footer')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;