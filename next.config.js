module.exports = {
  i18n: {
    defaultLocale: 'default',
    localeDetection: false,
    locales: ['default', 'en-gb', 'en-ca'],
  },
  async rewrites() {
    return [
      {
        destination: '/en-gb/nextjs.org',
        source: '/default',
        locale: false,
      },
      {
        destination: '/en-ca/nextjs.org',
        source: '/en-ca',
        locale: false,
      },
    ];
  },
};
