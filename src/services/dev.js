import utils from '../utils';

export default {
  async getProfile() {
    await utils.delay(100);
    return utils.camelizeKeys({ cp: 10086 });
  },
};
