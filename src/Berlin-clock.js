class BerlinClock {
    convertTimestamp(){
        const timeStamp = Date.now();
        const date = new Date(timeStamp);
        
        return {
            hours : date.getHours(),
            minutes : date.getMinutes(),
            seconds : date.getSeconds(),
            timeStamp : timeStamp
        };
    }

    convertMinutesBlock5(minutes){
        const blockMinutes = minutes % 5;
        return blockMinutes;
    }

    convertMinutesBlock1(minutes){
        const singleMinutes = minutes - this.convertMinutesBlock5;
        return singleMinutes;
    }

}
module.exports = BerlinClock;