class Entity {
    constructor(fixed, x, y) {
        this.fixed = fixed;
        this.x = x;
        this.y = y;
    }
}

class Particle extends Entity {
    constructor(fixed, x, y, vx, vy, radius, mass) {
        super(fixed, x, y);
        this.vx = vx;
        this.vy = vy;
        this.radius = radius;
        this.mass = mass;
    }
}

class FixedParticle extends Particle {
    constructor(x, y, radius, mass, crossSection) {
        super(true, x, y, 0, 0, radius, mass, crossSection);
        this.crossSection = crossSection;
    }
}

class Fuel extends FixedParticle {
    static #RADIUS = 10;
    static #MASS = 238;
    static #CROSS_SECTION = 20;

    constructor(x, y) {
        super(x, y, Fuel.#RADIUS, Fuel.#MASS, Fuel.#CROSS_SECTION);
    }
}

class Waste extends FixedParticle {
    static #RADIUS = 8;
    static #MASS = 200;
    static #CROSS_SECTION = 8;

    constructor(x, y) {
        super(x, y, Waste.#RADIUS, Waste.#MASS, Waste.#CROSS_SECTION);
    }
}

class Poison extends FixedParticle {
    static #RADIUS = 8;
    static #MASS = 200;
    static #CROSS_SECTION = 50;

    constructor(x, y) {
        super(x, y, Poison.#RADIUS, Poison.#MASS, Poison.#CROSS_SECTION);
    }
}

class FreeParticle extends Particle {
    constructor(x, y, vx, vy, radius, mass) {
        super(false, x, y, vx, vy, radius, mass);
    }
}

class Neutron extends FreeParticle {
    static #RADIUS = 1;
    static #MASS = 1;

    constructor(x, y, vx, vy) {
        super(x, y, vx, vy, Neutron.#RADIUS, Neutron.#MASS);
    }
}

class Coolant extends FreeParticle {
    static #RADIUS = 3;
    static #MASS = 18;

    constructor(x, y, vx, vy) {
        super(x, y, vx, vy, Coolant.#RADIUS, Coolant.#MASS);
    }
}

class Boundary extends Entity {
    constructor(x, y, width, height) {
        super(true, x, y);
        this.width = width;
        this.height = height;
    }
}