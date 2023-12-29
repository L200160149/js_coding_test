// regex
// slice    (string method)
function CodelandUsernameValidation(str) { 
    if (str.length < 4 || str.length > 25) return false;
    if (!str.charAt(0).match(/[a-zA-Z]+/g)) return false;
    const rules = /^[a-zA-Z0-9_]+$/;
    if (!rules.test(str)) return false;
    if (str.slice(-1) === '_') return false;
    
    return true;

}
   
// keep this function call here 
console.log(CodelandUsernameValidation("aaaaaaaaaa"));