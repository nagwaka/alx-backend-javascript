export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Getter methods
  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  // Method to clone the car using a Symbol key
  cloneCar() {
    const brandKey = Symbol('brand');
    const motorKey = Symbol('motor');
    const colorKey = Symbol('color');

    const clonedCar = new Car(
      this[brandKey],
      this[motorKey],
      this[colorKey],
    );
    return Object.fromEntries(
      Object.entries(clonedCar).filter(([key]) => !(key instanceof Symbol)),
    );
  }
}
