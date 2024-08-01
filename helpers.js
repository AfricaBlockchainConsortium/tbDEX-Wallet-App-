
export const helpers = {
  formatData: (data) => JSON.stringify(data),
  parseData: (data) => JSON.parse(data),
  isEmpty: (value) => value === null || value === undefined || value === '',
  isObject: (value) => typeof value === 'object',
  isArray: (value) => Array.isArray(value),
  isString: (value) => typeof value === 'string',
  isNumber: (value) => typeof value === 'number',
  isBoolean: (value) => typeof value === 'boolean',
  isFunction: (value) => typeof value === 'function',
  cloneObject: (obj) => {
    if (typeof obj !== 'object') return obj;
    const clone = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) clone[key] = helpers.cloneObject(obj[key]);
    }
    return clone;
  },
};


//This script defines various helper functions that can be used throughout the application. These functions include:

//- formatData: Converts JavaScript data to a JSON string.
//- parseData: Parses a JSON string into JavaScript data.
//- isEmpty: Checks if a value is empty (null, undefined, or an empty string).
//- isObject: Checks if a value is an object.
//- isArray: Checks if a value is an array.
//- isString: Checks if a value is a string.
//- isNumber: Checks if a value is a number.
//- isBoolean: Checks if a value is a boolean.
//- isFunction: Checks if a value is a function.
//- cloneObject: Recursively clones an object.