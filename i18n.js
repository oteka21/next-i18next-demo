const NextI18Next = require('next-i18next').default

// module.exports = new NextI18Next({
//   defaultLanguage: 'de',
//   otherLanguages: ['en'],
//   browserLanguageDetection: true,
// })

const nextI18nOptions = {
  defaultLanguage: 'en',
  otherLanguages: ['de'],
  browserLanguageDetection: false
};
const languages = nextI18nOptions.otherLanguages;
languages.push(nextI18nOptions.defaultLanguage);

const NextI18NextInstance = new NextI18Next({ ...nextI18nOptions });

if (NextI18NextInstance && NextI18NextInstance.i18n && !NextI18NextInstance.i18n.languages) {
  NextI18NextInstance.i18n.languages = languages;
}

module.exports = NextI18NextInstance;