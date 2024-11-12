
export class BerlinClock {

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

    /**
     * Converts the hours into the number of five-hour blocks.
     * @param {Number} hours The hours value to convert.
     * @returns {Number} The number of five-hour blocks.
     */
    convertHoursBlock5(hours){
        return Math.floor(hours / 5);
    }

    /**
     * Converts the hours into the number of one-hour blocks.
     * @param {Number} hours The hours value to convert.
     * @returns {Number} The number of one-hour blocks.
     */
    convertHoursBlock1(hours){
        return hours % 5;
    }

    
    /**
     * Determines whether the bottom-most yellow light should be turned on or off 
     * based on the current second value.
     * @param {Number} seconds The seconds value to determine from.
     * @returns {Boolean} true if the light should be turned on, false otherwise.
     */
    toggleSecondLight(seconds){
        return seconds % 2 === 0;
    }

    convertAll(){
        const time = this.convertTimestamp();
        return {
            toggleLight : this.toggleSecondLight(time.seconds),
            hoursBlock5 : this.convertHoursBlock5(time.hours),
            hoursBlock1 : this.convertHoursBlock1(time.hours),
            minutesBlock5 : this.convertMinutesBlock5(time.minutes),
            minutesBlock1 : this.convertMinutesBlock1(time.minutes)
        }
    }
}