import merge from 'lodash/merge';

import login from './login';
import core from './core';

export default {
  language: 'nl',
  country: 'nl',
  name: 'Nederlands',
  embeddedLocale: merge(login, core),
};
