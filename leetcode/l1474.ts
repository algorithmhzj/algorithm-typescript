import {ListNode} from "./listnode";

function deleteNodes(head: ListNode | null, m: number, n: number): ListNode | null {
    let dummy: ListNode = new ListNode(0)
    dummy.next = head;
    let aux: ListNode = dummy
    OUT:
        while (true) {
            for (let i = 0; i < m; i++) {
                aux = aux.next
                if (aux == null) {
                    break OUT
                }
            }
            let temp: ListNode = aux
            for (let i = 0; i <= n; i++) {
                temp = temp.next
                if (temp == null) {
                    aux.next = null
                    break OUT
                }
            }
            aux.next = temp
        }
    return head
}
