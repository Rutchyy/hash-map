class Hashmap {
    constructor() {
        this.buckets = [...Array(16).keys()].map((i) => ({}));
    }

    hash(key) {
        let code = 0;

        for (let i = 0; i < key.length; i++) {
            code = 31 * code + key.charCodeAt(i);
        }

        return code % 16;
    }

    set(key, value) {
        let index = this.hash(key);

        this.buckets[index][key] = value;
    }

    get(key) {
        let index = this.hash(key);

        return this.buckets[index][key];
    }

    has(key) {
        let index = this.hash(key);

        return key in this.buckets[index] ? true : false;
    }

    remove(key) {
        let index = this.hash(key);

        delete this.buckets[index][key];
    }

    length() {
        let total = 0;
        for (let i in this.buckets) {
            total += Object.keys(this.buckets[i]).length
        }

        return total;
    }

    clear() {
        this.buckets = [...Array(16).keys()].map((i) => ({}));
    }

    keys() {
        let total = 0;
        for (let i in this.buckets) {
            total += Object.keys(this.buckets[i]);
        }

        return total.split("").splice(1, total.length);
    }

    values() {
        let total = [];
        for (let i in this.buckets) {
            if (Object.values(this.buckets[i]) != 0) {
                total.push(Object.values(this.buckets[i]));
            }
        }

        return total.flat();
    }

    entries() {
        const keys = this.keys();
        const values = this.values();
        let all = [];
        for (let i in keys) {
            all.push([keys[i], values[i]])
        }

        return all;
    }
}