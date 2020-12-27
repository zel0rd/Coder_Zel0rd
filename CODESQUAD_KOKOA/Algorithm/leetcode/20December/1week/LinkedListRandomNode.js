/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function(head) {
    this.head = head
};

/**
 * Returns a random node's value.
 * @return {number}
 */

Solution.prototype.getRandom = function(head) {
    let acc = this.head
    let random = Math.floor(Math.random() * this.getLength(this.head))
    
    console.log("getRandom",this.head, random)
    for(let i = 0; i < random; i++){
        acc = acc.next
    }
    
    return acc.val
        
};

Solution.prototype.getLength = function(head) {
    let length = 0;
    const getLength = (root, len) => {
        console.log("getLength", root)
        if(!root) { 
            length = Math.max(len - 1, length); 
            return; 
        } 
        getLength(root.next, len + 1); 
    }
    getLength(this.head,1)
    return length;
}

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */