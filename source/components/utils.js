'use strict';

/**
 * Check does user browser support File API
 * @returns {boolean}
 */
function isSupportedFileApi() {
  return !!(window.File && window.FileReader);
}

export {
  isSupportedFileApi
}