// Definition for singly-linked list
// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }


// function middleNode(head: ListNode | null): ListNode | null {
    
//     let p1 = head; // move fwd 1 node at a time
//     let p2 = head; // move fwd 2 nodes at a time
//     while ( p2 !== null && p2?.next) {
//         console.log(`p1.val: ${p1?.val}     p2.val:${p2?.val}`);
//         p1 = p1?.next ? p1.next : null;
//         p2 = p2?.next?.next ? p2.next.next : null;
//     };

//     return p1;
// };

// let n1 = new ListNode(4);
// let n2 = new ListNode(5);   n1.next = n2;
// let n3 = new ListNode(6);   n2.next = n3;
// let n4 = new ListNode(7);   n3.next = n4;
// let n5 = new ListNode(8);   n4.next = n5;
// let n6 = new ListNode(9);   n5.next = n6;
// let n7 = new ListNode(10);  n6.next = n7;
// let n8 = new ListNode(11);  n7.next = n8;
// let n9 = new ListNode(12);  n8.next = n9;


// const test876 = (head: ListNode) => {
//     console.log(`${head.val}   :    ${middleNode(head)?.val}`);
// };

// test876(n1);


