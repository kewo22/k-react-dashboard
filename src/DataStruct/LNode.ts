export class LNode<T> {

    data: any;
    next: LNode<T> | null = null
    prev: LNode<T> | null = null

    constructor(data: T) {
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