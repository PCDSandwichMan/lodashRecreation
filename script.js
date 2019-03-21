const _ = {
    clamp(number, lower, upper) {
      const lowerClampedValue = Math.max(number, lower);
      const clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },
    inRange(number, start, end) {
      if (end === undefined) {
        end = start;
        start = 0;
      }
      if (start > end) {
        let tempStart = start;
        start = end;
        end = tempStart;
      }
      if (number > start && number < end) {
        return true;
      } else {
        return false;
      } 
    },
    words(string) {
      arrString = string.split(' ');
      return arrString;
    },
    pad(string, length) {
      if (length <= string.length) {
       return string;
      };
      const startPaddingLength = Math.floor((length - string.length) / 2);
      const endPaddingLength = (length - string.length) - startPaddingLength;
      paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
      return paddedString; 
    },
    has(object, key) {
      const hasValue = object[key]!=undefined;
      return hasValue;
    },
    invert(object) {
      const invrtOb = {}
      for(item in object) {
        originalVal = object[item]; 
        invrtOb[originalVal] = item;
      }
      return invrtOb;
    },
    findKey(obj, func) {
      for (item in obj) {
        if (func(obj[item])) {
          return item;
        }
      }
    },
    drop(array, num) {
      if (!num) {
        num = 1;
      }
      if (array.length >= num) {
        return array.slice(num);
      } else {
        return false;
      }
    },
    dropWhile(array, func) {
      for (let i = 0; i < array.length; ++i) {
        if(func(array[i])) {
          array.shift();
          continue;
        }
        break;
      }
      return array;
    },
    chunk(array, size){
      const final = [];
      if (!size && size < 0) {
        size = 1;
      }
      for(let i = 0; i < array.length; i += size){
        const arrayChunk = array.slice(i,i+size);
        final.push(arrayChunk);
      }
      return final;
    },
    
  };
  
  
  
  
  // Do not write or modify code below this line.
  module.exports = _;