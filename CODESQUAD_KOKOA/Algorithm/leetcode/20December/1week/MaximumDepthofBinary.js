// example1
// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// example2
// Input: root = [1,null,2]
// Output: 2
// example3
// Input: root = []
// Output: 0
// example4
// Input: root = [0]
// Output: 1

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
 * @return {number}
 */
var maxDepth = function(root) {
    
};

class Node 
{ 
    constructor(data) 
    { 
        this.data = data; 
        this.left = undefined; 
        this.right = undefined; 
    } 
} 

// Binary Search tree class 
class BinaryTree 
{ 
    constructor() 
    { 
        // root of a binary seach tree 
        this.root = undefined; 
        // this.children = undefined;
    } 
  
    // function to be implemented 
    // insert(data) 
    insert(data) 
    { 
        // Creating a node and initailising  
        // with data  
        var newNode = new Node(data); 
                        
        // root is null then node will 
        // be added to the tree and made root. 
        if(this.root === undefined) 
            this.root = newNode; 
        else
            // find the correct position in the  
            // tree and add the node 
            this.insertNode(this.root, newNode); 
    } 

    insertNode(node, newNode) 
    {
        if(node.left === undefined){
            node.left = newNode;
        } else if(node.right === undefined){
            node.right = newNode;
        } 
        else {
            this.insertNode(node.left, newNode);  
        }
    } 
    // remove(data) 
                  
  
    // Helper function 
    // findMinNode() 
    // getRootNode() 
    // inorder(node) 
    // preorder(node)                
    // postorder(node) 
    // search(node, data) 
    // maxDepth()
} 

let root = [3,9,20,21,55,15,7]

let MyTree = new BinaryTree
console.log(MyTree)
MyTree.insert(root[0])
console.log(MyTree)
MyTree.insert(root[1])
console.log(MyTree)
MyTree.insert(root[2])
console.log(MyTree)
MyTree.insert(root[3])
console.log(MyTree)
MyTree.insert(root[4])
console.log(MyTree)
MyTree.insert(root[5])
// console.log(JSON.stringify(MyTree))

// solution
// var maxDepth = function(root) {
//     let depth = 0; 
//     const dfs = (root, len) => { 
//         if(!root) { 
//             depth = Math.max(len - 1, depth); 
//             return; 
//         } 
//         dfs(root.left, len + 1); 
//         dfs(root.right, len + 1); 
//     } 
//     dfs(root, 1); 
//     return depth;
    
// };
