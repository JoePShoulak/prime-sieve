/* A Sieve of Eratosthenes (https://en.wikipedia.org/wiki/Sieve_of_Eratosthene) 
   algorithm that I put together because I was bored. Check to see if a number
   is prime in O(n log log n) time! */

const floor = Math.floor;
const sqrt = Math.sqrt;

/* == HELPER FUNCTIONS == */
const multiplesUpTo = (num, limit) => {
    const countingArray = [...Array(limit).keys()]; // [1, 2, 3, 4, ...]
    return countingArray.map(n => (n + 1) * num).slice(1); // [-3-, 6, 9, 12, ...]
}

/* == CLASS == */
class Sieve {
    #composites;
    #current;

    constructor(target) {
        this.#composites = new Set();
        this.#current = 2;
        this.prime = undefined;
        this.target = target;
    }

    #nextPrime = () => {
        do { this.#current++ } while (this.#composites.has(this.#current));
    }

    #markComposites = () => {
        const limit = floor(this.target / this.#current);

        multiplesUpTo(this.#current, limit).forEach(n => this.#composites.add(n));
    }

    compute = () => {
        while (this.#current < sqrt(this.target)) {
            this.#markComposites();
            this.#nextPrime();
        }

        this.prime = !this.#composites.has(this.target);

        return this;
    }
}

export default Sieve;