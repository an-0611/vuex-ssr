export default {
  install(Vue, { cdn }) {
    Vue.prototype.$assetsUrl = function $assetsUrl(path) {
      return [cdn, path].join('/');
    };
    Vue.prototype.$i18nUrl = function $i18nUrl(path) {
      const [region, lang = region] = (
        this.$i18n.locale || process.env.LOCALE
      ).split('_');
      return this.$assetsUrl([lang, path].join('/'));
    };
  },
};
