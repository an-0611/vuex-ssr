import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from './node';
import plugin from './plugin';

Vue.use(VueI18n);
Vue.use(plugin, { cdn: process.env.CDN });

const loadedLocales = {};

export const i18n = new VueI18n({
  locale: process.env.LOCALE,
  fallbackLocale: process.env.LOCALE,
  messages,
});

function setLocale(locale) {
  i18n.locale = locale;
  document.documentElement.lang = locale;
  return locale;
}

const langMap = JSON.parse(process.env.LANG_MAP);

const fetchMessage = async (locale) => {
  try {
    const res = await fetch(
      `https://${process.env.REGION}.game.rosetta.garenanow.com/transify/${process.env.TRANSIFY_ID}?lang=${langMap[locale]}`,
    );
    if (res.status === 200) {
      return res.json();
    }
    throw Error(`Fetch Rosetta failed with status ${res.status}`);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('Referring to local translation due to', e);
    return messages[locale];
  }
};

export async function loadLocale(locale) {
  if (locale in loadedLocales) {
    return setLocale(locale);
  }

  const message = await fetchMessage(locale);
  i18n.setLocaleMessage(locale, message);
  loadedLocales[locale] = true;
  return setLocale(locale);
}
