import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

// create switch-case with default case
const index = (formatName) => {
  if (formatName === 'stylish') {
    return stylish;
  }
  if (formatName === 'plain') {
    return plain;
  }
  if (formatName === 'json') {
    return json;
  }
  return 0;
};

export default index;
