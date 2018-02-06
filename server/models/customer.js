class Customer {
    constructor(firstName, lastName, streetAddress, streetAddress2, city, state, zip) {
        this.firstName = null;
        this.lastName = null;
        this.streetAddress = null;
        this.streetAddress2 = null;
        this.city = null;
        this.state = null;
        this.zip = null;

        this.setFirstName(firstName);
        this.setLastName(lastName);
        this.setStreetAddress(streetAddress);
        this.setStreetAddress2(streetAddress2);
        this.setCity(city);
        this.setState(state);
        this.setZip(zip);
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    getStreetAddress() {
        return this.streetAddress;
    }

    getStreetAddress2() {
        return this.streetAddress2;
    }

    getCity() {
        return this.city;
    }

    getState() {
        return this.state;
    }

    getZip() {
        return this.zip;
    }

    setFirstName(firstName) {
        this.firstName = firstName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    setStreetAddress(streetAddress) {
        this.streetAddress = streetAddress;
    }

    setStreetAddress2(streetAddress2) {
        this.streetAddress2 = streetAddress2;
    }

    setCity(city) {
        this.city = city;
    }

    setState(state) {
        this.state = state;
    }

    setZip(zip) {
        this.zip = zip;
    }
}

module.exports = Customer;
