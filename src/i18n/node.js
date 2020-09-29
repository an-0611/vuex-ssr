import https from 'https';

const langMap = JSON.parse(process.env.LANG_MAP);

const fetchTranslations = (locale) =>
  new Promise((resolve, reject) =>
    https
      .get(
        `https://sg.game.rosetta.garenanow.com/transify/${process.env.TRANSIFY_ID}?lang=${langMap[locale]}`,
        { headers: { referer: process.env.REFERER } },
        (res) => {
          if (res.statusCode !== 200) {
            reject(
              new Error(`Fetch Rosetta failed with status ${res.statusCode}`),
            );
          } else {
            const data = [];
            res.on('data', (chunk) => {
              data.push(chunk);
            });
            res.on('end', () => {
              resolve(JSON.parse(Buffer.concat(data)));
            });
          }
        },
      )
      .on('error', (err) => reject(err)),
  );

export default async ({ locales }) => {
  if (process.env.NODE_ENV === 'production') {
    return {
      code: (await Promise.all(locales.map(fetchTranslations)))
        .map(
          (translation, index) =>
            `exports['${locales[index]}'] = ${JSON.stringify(translation)}`,
        )
        .join('\n'),
    };
  }

  const code = [];
  const loadedLocaleSet = new Set();
  locales.forEach((l) => {
    let locale = l;
    try {
      require.resolve(`./${locale}`);
    } catch (e) {
      locale = process.env.LOCALE;
    }
    code.push(`exports['${l}'] = require('babel-loader!./${locale}').default;`);
    if (!loadedLocaleSet.has(locale)) {
      loadedLocaleSet.add(locale);
    }
  });

  const loadedLocales = Array.from(loadedLocaleSet);
  const dependencies = loadedLocales.map(
    (locale) => `babel-loader!./${locale}`,
  );

  code.push(`
if (module.hot) {
  module.hot.accept(
    ${JSON.stringify(dependencies)},
    function(requests) {
      requests.forEach(request => {
        var locale = request.replace(/.*\\/(\\w+)\\.js$/, '$1');
        vue.$i18n.setLocaleMessage(locale, __webpack_require__(request).default);
      });
    }
  );
}
  `);

  return {
    code: code.join('\n'),
    contextDependencies: [__dirname],
    dependencies,
  };
};
