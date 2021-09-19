/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var rightSideView = function(root) {
   
    if ( root.length === 0 ) {
      return []; 
    }
    
    const views = [];
    let i = 0;
    
    while ( i < root.length ) {
        views.push(root[i]);
        
        i += i > 0 ? i * 2 : i + 2;
    }
    
    return views;
};
console.log(rightSideView([1,2,3,null,5,null,4])); // should return [1,3,4]
