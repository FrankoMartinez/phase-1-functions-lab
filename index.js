// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    if(distance > 42) {
        return distance - 42;
    } else 
    return 42 - distance;
}

function distanceFromHqInFeet(block) {
    distanceFromHqInBlocks(block);
    return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (destination >= start) {
        return (destination - start) * 264;
    } else
    return (start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    if (destination < 400) {
        return (destination - start) * 0;
    } else if (destination > 400 && 2000 > destination) {
        return ((264 * 2) - 400) * 0.02;
    } else if (destination > 2000) {
        return 25;
    } else if (destination > 2500) {
        return "cannot travel that far"
    }
}