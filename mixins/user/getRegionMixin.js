const { _get } = require('../../lib/helpers');

const getRegionMixin = {
  async getRegion() {
    if (!this.email || !this.password) {
      return {
        error: 406,
        msg: 'Library needs to be initialized using email and password',
      };
    }

    const login = await this.getCredentials();

    const error = _get(login, 'error', false);

    if (error) {
      return login;
    }

    return {
      email: login.user.email,
      region: login.region,
    };
  },
};

module.exports = getRegionMixin;
