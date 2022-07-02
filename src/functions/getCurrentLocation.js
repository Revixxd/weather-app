export function getCurrentLocation() {
    const coord = []
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    function success(pos) {
        const crd = pos.coords;
        
        coord.push(crd.latitude)
        coord.push(crd.longitude)
        // console.log('Your current position is:');
        // console.log(`Latitude : ${crd.latitude}`);
        // console.log(`Longitude: ${crd.longitude}`);
        // console.log(`More or less ${crd.accuracy} meters.`);
        // console.log(coord)
        return coord
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        return "error"
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
    

}