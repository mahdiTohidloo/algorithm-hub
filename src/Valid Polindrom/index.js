/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    const validString = s.replace(/,| |:/g, '').toLowerCase();
    return validString.substr(0, ((validString.length - 1) / 2)) ===  validString.substr(validString.length / 2, (validString.length -1) / 2 );
};