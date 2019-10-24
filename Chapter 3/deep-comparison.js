
// If key:value == key:value
// If key:obj recursive

// Base call: key:val is not object or is not the same


// I couldn´t solve it...
deepEqual1 = (val1, val2) => {
    if (val1 === val2) {
        return true;
    } else if (typeof val1 === "object" && typeof val2 === "object") {
        if (Object.keys(val1).length === Object.keys(val2).length) {
            for (var property in val1) { 
                if (val2.hasOwnProperty(property)) {
                    if (!deepEqual(val1[property], val2[property])) {
                        return false
                    }

                } else {
                    return false;
                }
              }
        }
    } else {
        return true
    }  return false;
};


// From internet
var deepEqual2 = function (x, y) {
    if (x === y) {
      return true;
    }
    else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
      if (Object.keys(x).length != Object.keys(y).length)
        return false;
  
      for (var prop in x) {
        if (y.hasOwnProperty(prop))
        {  
          if (! deepEqual(x[prop], y[prop]))
            return false;
        }
        else
          return false;
      }
  
      return true;
    }
    else 
      return false;
  }

  // From Eloquent Javascript
  function deepEqual(a, b) {
    if (a === b) return true;
    
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object")
      return false;
    
    var propsInA = 0, propsInB = 0;
  
    for (var prop in a)
      propsInA += 1;
  
    for (var prop in b) {
      propsInB += 1;
      if (!(prop in a) || !deepEqual(a[prop], b[prop]))
        return false;
    }
  
    return propsInA == propsInB;
  }


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual({here: {is: "a"}, object: 2}, {here: {is: "a"}, object: 2}));