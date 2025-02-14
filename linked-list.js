/* eslint-disable max-classes-per-file */

class Node {
    constructor(key, value = null, nextNode = null) {
        this.key = key;
        this.value = value;
        this.nextNode = nextNode;
    }
}

export class LinkedList {
    constructor() {
        this.key = null;
        this.value = null;
    }

    append(key, value) {
        const newNode = new Node(key, value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.nextNode !== null) {
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }
    }

    prepend(key, value) {
        this.head = new Node(key, value, this.head);
    }

    size() {
        let counter = 0;
        let current = this.head;
        while (current !== null) {
            counter += 1;
            current = current.nextNode;
        }
        return counter;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        let current = this.head;
        if (current.nextNode === null) {
            return current;
        }
        while (current.nextNode !== null) {
            current = current.nextNode;
        }
        return current;
    }

    at(index) {
        if (index < 0) return null;
        let current = this.head;
        let count = 0;
        while (current !== null) {
            if (count === index) return current;
            current = current.nextNode;
            count += 1;
        }
        return null;
    }

    pop() {
        let current = this.head;
        if (!current) return;
        if (!current.nextNode) {
            this.head = null;
        }
        while (current !== null) {
            if (current.nextNode.nextNode === null) {
                current.nextNode = null;
            }
            current = current.nextNode;
        }
    }

    contains(value) {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    find(value) {
        let counter = 0;
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return counter;
            }
            counter += 1;
            current = current.nextNode;
        }
        return null;
    }

    toString() {
        let string = "";
        let current = this.head;
        if (!current) {
            return string;
        }
        while (current !== null) {
            if (current === this.head) {
                string += `(${current.value})`;
            } else if (current.nextNode === null) {
                string += ` -> (${current.value}) -> null`;
            } else {
                string += ` -> (${current.value})`;
            }
            current = current.nextNode;
        }
        return string;
    }

    insertAt(key, value, index) {
        let counter = 0;
        let current = this.head;
        if (index < 0 || index >= this.size()) return;
        while (current !== null) {
            if (index === 0) {
                this.head = { key, value, nextNode: current };
                return;
            }
            if (counter < index - 1) {
                current = current.nextNode;
                counter += 1;
            }
            if (counter === index - 1) {
                const adjacentNode = current.nextNode;
                current.nextNode = { key, value, nextNode: adjacentNode };
                return;
            }
        }
    }

    removeAt(index) {
        if (index < 0 || index >= this.size()) return;
        if (index === 0) {
            const adjacentNode = this.head.nextNode;
            this.head = adjacentNode;
            return;
        }
        let counter = 0;
        let current = this.head;
        while (current !== null) {
            if (counter < index - 1) {
                current = current.nextNode;
                counter += 1;
            }
            if (counter === index - 1) {
                const adjacentNode = current.nextNode.nextNode;
                current.nextNode = adjacentNode;
                return;
            }
        }
    }
}
