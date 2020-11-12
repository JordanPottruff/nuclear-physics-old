class Event {
    constructor(time, entityA, entityB) {
        this.time = time;
        this.entityA = entityA;
        this.entityB = entityB;
        this.countA = entityA.collisionCount;
        this.countB = entityB.collisionCount;
    }

    isValid() {
        if (!this.entityA.fixed && this.entityA.collisionCount != this.countA) {
            return false;
        } 
        if (!this.entityB.fixed && this.entityB.collisionCount != this.countB) {
            return false;
        }
        return true;
    }
}

class EventPQ {
    constructor() {
        this.pq = new Array();
        this.n = 0;
    }

    isEmpty() {
        return this.n === 0;
    }

    size() {
        return this.n;
    }

    min() {
        if(this.isEmpty()) console.log("Priority queue underflow");
        return this.pq[1];
    }

    insert(value) {
        this.pq[++this.n] = value;
        this.swim(this.n);
    }

    delMin() {
        if(this.isEmpty()) console.log("Priority queue underflow");
        const min = this.pq[1];
        this.exch(1, this.n--);
        this.sink(1);
        this.pq[this.n+1] = null;
        return min;
    }

    swim(i) {
        while (i > 1 && this.greater(i/2, i)) {
            this.exch(i, i/2);
            i = Math.floor(i/2);
        }
    }

    sink(i) {
        while (2*i <= this.n) {
            let j = 2*i;
            if (j < this.n && this.greater(j, j+1)) j++;
            if (!this.greater(i, j)) break;
            this.exch(i, j);
            i = j;
        }
    }

    greater(i, j) {
        return this.pq[Math.floor(i)].time > this.pq[Math.floor(j)].time;
    }

    exch(i, j) {
        i = Math.floor(i);
        j = Math.floor(j);
        const temp = this.pq[i];
        this.pq[i] = this.pq[j];
        this.pq[j] = temp;
    }
}