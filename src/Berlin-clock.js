
class BerlinClock {

    /**
     * Initializes a new instance of the BerlinClock class, setting default values
     * for the number of lamps in the minutes and hours rows, as well as an initial 
     * state for the seconds indicator.
     */
    constructor(){
        this.MINUTES_BOTTOM_ROW = 4;
        this.MINUTES_TOP_ROW = 11;
        this.HOURS_BOTTOM_ROW = 4;
        this.HOURS_TOP_ROW = 4;
        this.isSecondEven = true;
    }

    /**
     * Converts the current timestamp into an object containing the hours, minutes, 
     * seconds, and the original timestamp.
     * @returns {Object} An object with the properties: hours, minutes, seconds, 
     * and timeStamp representing the current time.
     */
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

    /**
     * Converts the minutes into the number of five-minute blocks.
     * @param {Number} minutes The minutes value to convert.
     * @returns {Number} The number of five-minute blocks.
     */
    convertMinutesBlock5(minutes){
        return Math.floor(minutes / 5);
    }

    /**
     * Converts the minutes into the number of one-minute blocks.
     * @param {Number} minutes The minutes value to convert.
     * @returns {Number} The number of one-minute blocks.
     */
    convertMinutesBlock1(minutes){
        return minutes % 5;
    }

}
module.exports = BerlinClock;