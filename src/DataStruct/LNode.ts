export class LNode {

    data: any;
    next: LNode | null = null
    prev: LNode | null = null

    constructor(data: any) {
        this.data = data;
        this.next = this.next;
        this.prev = this.prev;
    }

    hasPrev(): boolean {
        return this.prev !== null;
    }

    hasNext(): boolean {
        return this.next !== null;
    }

}