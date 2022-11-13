const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');
const MilitaryType = require('./models/militaryType');
const experimentalPlane = require('./Planes/experimentalPlane');

class Airport {
    constructor(planes) {
        this.planes = planes;
      }
    
      get planes() {
        return this._planes;
      }
    
      set planes(value) {
        this._planes = value;
      }
     get PasPl() {
        let pl = this.planes;
        var x = [];
        for (let p of this.planes) {
            if (p instanceof PassengerPlane) {x.push(p);}
        }
        return x;
    }

    get MilitaryPlanes() {
        let militaryPlanes = [];
        this.planes.forEach(plane => {
            if (plane instanceof MilitaryPlane) {//if
                militaryPlanes.push(plane);
            }
            //else
            else{}
        });
//return
        return militaryPlanes;
    }

    get PassengerPlaneWithMaxPassengersCapacity() {
        let passengerPlanes = this.PasPl();
        let planeWithMaxCapacity = passengerPlanes[0];
        for (let i = 0; i < passengerPlanes.length; i++) {
            if (passengerPlanes[i].PassengersCapacity() >     planeWithMaxCapacity.getPassengersCapacity()) {
                planeWithMaxCapacity = passengerPlanes[i];
            }
        }
        return planeWithMaxCapacity;
    }







    getTransportMilitaryPlanes(){
        let transportMilitaryPlanes = [];
        let militaryPlanes = this.getMilitaryPlanes();
        for (let i = 0; i < militaryPlanes.length; i++) {
        if (militaryPlanes[i].getMilitaryType() == MilitaryType.TYPE_TRANSPORT) {
        transportMilitaryPlanes.push(militaryPlanes[i]);
        }
        }
        return transportMilitaryPlanes;
    }


    getBomberMilitaryPlanes()
    {
        let bomberMilitaryPlanes = [];
        let militaryPlanes = this.getMilitaryPlanes();
        for (let i = 0; i < militaryPlanes.length; i++) {
            if (militaryPlanes[i].getMilitaryType()=== MilitaryType.BOMBER) {
                bomberMilitaryPlanes.push(militaryPlanes[i]);
            }
        }
        return bomberMilitaryPlanes;
    }

    constructor(planes) {
        this.planes = planes;
    }


    getExperimentalPlanes() {
        let experimentalPlanes  = [];
        this.planes.forEach(plane => {
            if (plane instanceof experimentalPlane) {//if
                experimentalPlanes.push(plane);
            }
        });
//return
        return experimentalPlanes;
    }



    sortByMaxDistance() {
        this.planes.sort((a, b) => (a.Get_Max_Flight_Distance() > b.Get_Max_Flight_Distance()) ? 1 : -1);
        return this;
    }

    /**
     * Sorts by max speed
     * @return Airport
     */
    sortByMaxSpeed() {
        this.planes.sort((a, b) => (a.getMS() > b.getMS()) ? 1 : -1);
        return this;
    }

    sortByMaxLoadCapacity() {
        this.planes.sort((a, b) => (a.getMinLoadCapacity() > b.getMinLoadCapacity()) ? 1 : -1);
        return this;
    }

    getPlanes() {
        return this.planes;
    }




    static print(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;
