'use strict';
function VaultGenerator() {

  const vault = {};
  // console.log("vault: " + vault);

  function getValue(key){
    if (key in vault){
      return vault[key];
    } else {
      return null;
    }
  }

  function setValue(key, value){
    vault[key] = value;
  }
  
  return {
    getValue: getValue,
    setValue: setValue
  };
}

module.exports = VaultGenerator;


