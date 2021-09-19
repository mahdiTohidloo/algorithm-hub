var firstBadVersion = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
       for ( let i = 1; i <= n; i++ ) {
           if ( isBadVersion(i) )
               return i;
       }
    };
};