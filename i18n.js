const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
  lng: 'fr',
  defaultLanguage: 'de',
  otherLanguages: ['en', 'fr'],
  browserLanguageDetection: true,
  debug: true
})