const distanceFromHqInBlocks = (blocks) => {
    return Math.abs(blocks - 42)
}
   
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(pickup, dropoff) {
    return Math.abs(pickup - dropoff) * 264
}

function calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400) {
        return 0
    } else if (feet > 400 && feet < 2000) {
        return (feet - 400) * .02
    } else if (feet >= 2000 && feet <= 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }

}