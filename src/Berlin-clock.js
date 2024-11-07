class BerlinClock {

    constructor(){
        this.MINUTES_BOTTOM_ROW = 4;
        this.MINUTES_TOP_ROW = 11;
        this.HOURS_BOTTOM_ROW = 4;
        this.HOURS_TOP_ROW = 4;
        this.isSecondEven = true;
    }

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