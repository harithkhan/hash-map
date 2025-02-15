import { LinkedList } from "./linked-list.js";

export class HashMap {
    constructor(loadFactor = 0.75, capacity = 16) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.buckets = new Array(capacity);
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode =
                (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }
        return hashCode;
    }

    set(key, value) {
        const { buckets } = this;
        const index = this.hash(key);
        if (!buckets[index]) {
            const newLinkedList = new LinkedList();
            newLinkedList.append(key, value);
            buckets[index] = newLinkedList;
            return;
        }
        const existingList = buckets[index];
        let current = existingList.head;
        while (current !== null) {
            if (current.key === key) {
                current.value = value;
                return;
            }
            if (current.nextNode === null) {
                existingList.append(key, value);
                return;
            }
            current = current.nextNode;
        }
    }

    get(key) {
        const index = this.hash(key);
        if (!this.buckets[index]) return null;
        const bucket = this.buckets[index];
        let current = bucket.getHead();
        while (current !== null) {
            if (current.key === key) {
                return current.value;
            }
            current = current.nextNode;
        }
        return null;
    }

    has(key) {
        const index = this.hash(key);
        if (!this.buckets[index]) return false;
        const bucket = this.buckets[index];
        let current = bucket.getHead();
        while (current !== null) {
            if (current.key === key) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    remove(key) {
        const index = this.hash(key);
        if (!this.buckets[index]) return false;
        const bucket = this.buckets[index];
        let current = bucket.getHead();
        let bucketIndex = 0;
        while (current != null) {
            if (current.key === key) {
                bucket.removeAt(bucketIndex);
                return true;
            }
            current = current.nextNode;
            bucketIndex += 1;
        }
        return false;
    }

    length() {
        let counter = 0;
        const { buckets } = this;
        buckets.forEach((bucket) => {
            if (bucket) {
                counter += bucket.size();
            }
        });
        return counter;
    }

    clear() {
        this.buckets = new Array(this.capacity);
    }
}

const test = new HashMap();
test.set("Jack Fruit", 5);
test.set("Apples", 7);
test.set("Grapes", 10);
test.set("i", 50);
test.clear();
console.log(test);
console.log(JSON.stringify(test.buckets, null, 2));
console.log(test.length());
