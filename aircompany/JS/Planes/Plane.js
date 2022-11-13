class Plane {

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity) {
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.maxFlightDistance = maxFlightDistance;
        this.maxLoadCapacity = maxLoadCapacity;
    }

    get Model() {
        return this.model;
    }

    set model(value) {
        this._model = value;
      }

    get MS() {
        return this.maxSpeed;
    }
    set MS(value) {
        this._maxSpeed = value;
      }
    get max_Flight_Distance() {
        return this.maxFlightDistance;
    }
    set maxFlightDistance(value) {
        this._maxFlightDistance = value;
      }
    get minLoadCapacity() {
     let result = this.maxLoadCapacity;
     return result;
    }
    set maxLoadCapacity(value) {
        this._maxLoadCapacity = value;
      }
}

module.exports = Plane;
