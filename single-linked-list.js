class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let temp = this.head;
        let prev = this.head;
        while (temp.next) {
            prev = temp;
            temp = temp.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        if (!this.length) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    shift() {
        if (!this.head) return undefined;
        const temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        if (!this.length) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for (let i = 0; i < index; i++) temp = temp.next;
        return temp;
    }

    set(index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index === 0) return this.unshift(value);
        if (index === this.length - 1) return this.push(value);
        let temp = this.get(index - 1);
        if (temp) {
            const newNode = new Node(value);
            newNode.next = temp.next;
            temp.next = newNode;
            this.length++;
            return true;
        }

        return false;
    }

    remove(index) {
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let before = this.get(index -1);
        if (before) {
            const temp = before.next;
            before.next = temp.next;
            this.length--;
            return temp;
        }
        return undefined;
    }

    reverse() {
        const temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        return this;
        
    }
}