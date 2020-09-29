// feature: 將渲染的vue實例導出，將渲染好的vue實例轉換成HTML返回給client
// eslint-disable-next-line import/extensions
import { createApp } from './main.js';

export default (context) => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp();

    router.push(context.url);

    // wait until router has resolved possible async components and hooks
    // eslint-disable-next-line consistent-return
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      if (!matchedComponents.length) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return reject({ code: 404 });
      }

      resolve(app);
    }, reject);
  });
};
