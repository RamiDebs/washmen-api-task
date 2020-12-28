//Data
var companiesData = require("../Database/partners.json");
var resultData = [];

//get Method
exports.getCompanies = (req, res) => {
    var km = req.query.km
    res.json(doyourJob(km));
};


function doyourJob(km) {
    if (km > 0) {
        cleararray(resultData);
        cleararray(arrayToString);
        companiesData
            .forEach(company => {
                company.offices.forEach(office => {
                    var LatLong = office.coordinates.split(',');
                    console.log(office.coordinates.split(','));
                    // StarbucksCafeCentralLondon(51.5144636, -0.142571)
                    var distance = calculateDistance(51.5144636, -0.142571, LatLong[0], LatLong[1]);
                    checkDistance(km, distance, company.organization.concat(',', office.location + "," + office.address));

                });

            });
        if (resultData.length > 0) {
            // convert array to string
            var arrayToString = JSON.stringify(Object.assign({}, resultData));
            // convert string to json object
            var stringToJsonObject = JSON.parse(arrayToString);

            return stringToJsonObject;
        } else {
            return "Really? you want me to search for " + km + " only?! :p go bigger";
        }
    }
    return "Really? you want me to search for " + km + " only?! :p go bigger";


}

function cleararray(array) {
    array = [];
}

function checkDistance(userInputKm, distanceKM, data) {
    console.log(userInputKm + " " + distanceKM);
    if (userInputKm >= distanceKM) {
        resultData.push(data);
    }
}

function calculateDistance(lat1, lon1, lat2, lon2) {

    const R = 6371e3; // metres
    const φ1 = lat1 * Math.PI / 180; // φ, λ in radians
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = Math.round(R * c / 1000);
    console.log(d);
    return d;

}