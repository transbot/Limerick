export type TranslationKey = 
  | 'title' 
  | 'subtitle' 
  | 'uiLanguage' 
  | 'contentLanguage' 
  | 'generating' 
  | 'generateNew' 
  | 'copy' 
  | 'copied' 
  | 'footer'
  | 'previous'
  | 'next';

export type UILanguage = 'chinese' | 'english';

export const translations: Record<UILanguage, Record<TranslationKey, string>> = {
  chinese: {
    title: '五行打油诗生成器',
    subtitle: '一键生成有趣的中英文打油诗，体验传统文学的韵律之美与现代创意的完美结合',
    uiLanguage: '界面语言',
    contentLanguage: '诗歌语言',
    generating: '正在生成中...',
    generateNew: '生成新诗',
    copy: '复制诗句',
    copied: '已复制',
    footer: '让每一首诗都充满创意与惊喜 ✨',
    previous: '上一首',
    next: '下一首'
  },
  english: {
    title: 'Limerick Generator',
    subtitle: 'Generate delightful limericks in Chinese and English with one click, experiencing the perfect blend of traditional literary rhythm and modern creativity',
    uiLanguage: 'UI Language',
    contentLanguage: 'Content Language',
    generating: 'Generating...',
    generateNew: 'Generate New',
    copy: 'Copy Poem',
    copied: 'Copied',
    footer: 'Let every poem be filled with creativity and surprise ✨',
    previous: 'Previous',
    next: 'Next'
  }
};