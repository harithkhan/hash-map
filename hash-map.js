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
        console.log(`Index: ${index}`);
        if (!buckets[index]) {
            const newLinkedList = new LinkedList();
            newLinkedList.append(key, value);
            buckets[index] = [newLinkedList];
            return;
        }
        const existingList = buckets[index][0];
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
}

const test = new HashMap();
test.set("Apples", 5);
test.set("Apples", 7);
test.set("i", 50);
console.log(test);
console.log(JSON.stringify(test.buckets, null, 2));
