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
 * @return {boolean}
 */

 class TreeNode {
    constructor(val, left, right) {
      
        this.val = val || null;
        this.left = left || null;
        this.right = right || null;
    }
}

var checkNodeHeight = (node) => {
    if (!node || (!node.right && !node.left)) {
        return 0;
    }
    return 1 + Math.max(checkNodeHeight(node.left), checkNodeHeight(node.right))
};


var generateTree = (inputRoot) => {
    if (inputRoot.length < 1)
        return [];
    
    
    const first = new TreeNode(inputRoot[0], null, null);
    const tree = [first];
    const nodeState = {
        current: first,
        currentIndex: 0,
        left: false,
    };

    inputRoot.slice(1, inputRoot.length).forEach((item, index) => {
        let node = null;

        if (item) {
           node = new TreeNode(item, null, null);           
        }
 
        
        tree.push(node);
        if (!nodeState.left) {
            nodeState.left = true;
            nodeState.current.left = node;
        } else  {
            nodeState.current.right = node;
            nodeState.current = tree[nodeState.currentIndex + 1];
            nodeState.currentIndex++;
            nodeState.left = false;
        }    
    });
    return first;
};


const isTreeBalanced = (node) => {
    const left = checkNodeHeight(node.left);
    const right = checkNodeHeight(node.right);
    const isOk = Math.abs(left - right) <= 1;
    let leftOk = true;
    let rightOk = true;
    if (node.left) {
        leftOk = ok(node.left)
    }
    if (node.right) {
        rightOk = ok(node.right)
    }
    return isOk && leftOk && rightOk;

};

var isBalanced = function(root) {
    const treeNodesLevel = {
        left: 0,
        right: 0
    };

    const tree = generateTree(root);


    return isTreeBalanced(tree);
};

const test = [1,2,2,3,3,null,null,4,4];
console.log(isBalanced(test));