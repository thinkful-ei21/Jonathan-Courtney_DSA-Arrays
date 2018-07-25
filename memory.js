class Memory {
    constructor() {
        this.memory = new Float64Array(1024);
        this.head = 0;
    }

    allocate(size) {
        if (this.head + size > this.memory.length) {
            return null;
        }

        let start = this.head;

        this.head += size;
        return start;
    }

    free(ptr) {}

    copy(toIndex, fromIndex, size) {
        if (fromIndex === toIndex) {
            return;
        }

        if (fromIndex > toIndex) {
            for (let i = 0; i < size; i++) {
                this.set(toIndex + i, this.get(fromIndex + 1));
            }
        }
    }

    get(ptr) {
        return this.memory[ptr];
    }

    set(ptr, value) {
        this.memory[ptr] = value;
    }
}

module.exports = Memory;