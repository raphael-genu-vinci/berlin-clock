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
}
module.exports = BerlinClock;