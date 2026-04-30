export const detectLanguage = async () => {
  // 1. Check IP-based location (Highest priority according to requirement)
  try {
    const response = await fetch('https://ipapi.co/json/');
    if (response.ok) {
      const data = await response.json();
      const countryCode = data.country_code; // e.g., 'KR', 'US', 'JP'
      
      if (countryCode === 'KR') return 'ko';
      if (countryCode === 'JP') return 'jp';
      // For other countries, we'll fall back to browser language or English
      if (countryCode) return 'en';
    }
  } catch (error) {
    console.warn('Failed to detect language by IP, falling back to browser language:', error);
  }

  // 2. Check browser language (Second priority)
  const languages = navigator.languages || [navigator.language || navigator.userLanguage];
  for (const langTag of languages) {
    const lang = langTag.split('-')[0].toLowerCase();
    if (['ko', 'en', 'jp'].includes(lang)) {
      return lang;
    }
  }

  // 3. Default language (Lowest priority)
  return 'ko';
};
