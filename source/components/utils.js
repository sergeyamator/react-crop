'use strict';

/**
 * Return styles which centerer element
 */
function center() {
  return {
    left: '50%',
    top:  '50%',
    transform: 'translate(-50%, -50%)'
  }
}

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