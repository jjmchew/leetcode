// Definition for singly-linked list (see problem 876)
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const intN = (node: ListNode | null, n:number): ListNode | null =>{
        let tmp = node;
        for ( let x = 0; x < n; x++ ) {
            tmp = tmp?.next ? tmp.next : null;
            console.log('      tmp.val',tmp?.val);
        }
        if (tmp) return tmp;
        else return null;
    }

    let p1 = head; // move fwd 1 node at a time
    let p2: ListNode | null; // move n node ahead of p1
    let tmp: ListNode | null;

    do {
        tmp = intN(p1,n);
        if (tmp) p2 = tmp;
        else (p2 = p1);

        if ( tmp?.next ) p1 = p1?.next ? p1?.next : null;
    } while (tmp?.next);

    console.log(`p1: ${p1?.val}    p2: ${p2?.val}`);
    
    if ( p2 === p1 && !p1?.next ) return null;
    else if (p2 === p1 && p1?.next ) return p1?.next;
    else if (p1) p1.next = p1.next?.next ? p1.next?.next : null ;
    return head;
};

const printList = (head:ListNode | null) =>{
    let s: Array<string> = [];
    let node = head;
    while ( node !== null ) {
        s.push(node?.val.toString());
        node = node?.next;
    }
    console.log(`[ ${s.join(',')} ]`);
};

let n19_1 = new ListNode(1);
let n19_2 = new ListNode(2);   n19_1.next = n19_2;
let n19_3 = new ListNode(3);   n19_2.next = n19_3;
let n19_4 = new ListNode(4);   n19_3.next = n19_4;
let n19_5 = new ListNode(5);   n19_4.next = n19_5;
// let n19_6 = new ListNode(6);   n19_5.next = n19_6;
// let n19_7 = new ListNode(7);   n19_6.next = n19_7;
// let n19_8 = new ListNode(8);   n19_7.next = n19_8;
// let n19_9 = new ListNode(9);   n19_8.next = n19_9;


const test19 = (head: ListNode, n:number) => {
    printList(head);
    console.log('=========== remove n=',n);
    printList(removeNthFromEnd(head,n));
};

test19(n19_1, 5);