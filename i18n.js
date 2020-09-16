/*
Language components naming:
{rootFolder}.{componentFolder}.{location}.{context}

Example:
  screen: {
    AuthScreen: {
      header: {
        hello: 'Hello!'
      }
    }
  }
*/

import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import ru from 'translations/ru';

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag;
}

I18n.fallbacks = true;
I18n.translations = {
  ru,
};

export default I18n;
