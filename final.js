// Radian to Degree Converter

function radianToDegree(radianNumber) {
 
    if (typeof radianNumber === 'number') {
        const formula = 180 / Math.PI;                   
        const result = radianNumber * formula;    
        return parseFloat(result.toFixed(2));                        
    }
    else {
        const validIput = 'Plece Enter Valid input';
        return validIput ;
    }
}

console.log( radianToDegree(199));  







// Javascript File Extension Finder

function isJavaScriptFile(fileName) {

    if (fileName.endsWith('.js')) {
        const fileValue = fileName;
        const fileExtension = fileValue.endsWith('.js');        
        return fileExtension;                                 
    }
    else {
        const validIput = 'Plece Enter Valid input';
        return validIput;
    }


}

console.log(isJavaScriptFile('index.js'));









// Total Price of Diesel Petrol and Octane

function oilPrice(diesel, petrol, octane) {

    if (typeof diesel === 'number' && typeof petrol === 'number' && typeof octane === 'number') {
        const dieselPrice = diesel * 114;         
        const petrolPrice = petrol * 130;        
        const octanePrice = octane * 135;         
        const totalSum = dieselPrice + petrolPrice + octanePrice; // Total Sum
        return totalSum;
    }

    else {
        const validIput = 'Plece Enter Valid input';
        return validIput ;
    }
}


console.log(oilPrice(10, 10, 10));








//Bus Passenger Fare

function publicBusFare(passenger) {
    let reserveBus = 50;                                                
    let microBus = 11;                                                  
    let publicBusFareValue = 250;                                       
    let wrongNumber = 0.99999999;                                       
    if (passenger >= reserveBus) {                                      
        let reserveBusCapacity = passenger % reserveBus;                
        let microBusCapacity = reserveBusCapacity % microBus;           
        let lastPassengerPrice = microBusCapacity * publicBusFareValue; 
        return lastPassengerPrice ;
    }

    else if (passenger >= microBus) {                                   
        let microBusCapacity = passenger % microBus;                
        let lastPassengerPrice = microBusCapacity * publicBusFareValue;
        return lastPassengerPrice;
    }

    else if (passenger <= microBus && passenger > wrongNumber) {         
        let microBusCapacity = passenger % microBus;
        let lastPassengerPrice = microBusCapacity * publicBusFareValue;
        return lastPassengerPrice;

    }

    else if (passenger <= wrongNumber  ) {                              
        let wrongNumberRetan = 'Wrong Number';
        return wrongNumberRetan;
    }

    else {                                                              
        const validIput = 'Plece Enter Valid input';
        return validIput;
    }

}

console.log(publicBusFare(99));








// We are True Friend
const trueFriend = [
    { name: 'duke', friend: 'putu' },
    { name: 'putu', friend: 'duke' }
];

function isBestFriend(inPut) {
    const fristInput = inPut[0];                        
    const secondInput = inPut[1];                          

    if (fristInput.name === secondInput.friend && secondInput.name === fristInput.friend) {
        return true;
    }
    else {
        const validIput = 'Plece Enter Valid input';
        return validIput ;
    }
}



console.log(isBestFriend(trueFriend));
