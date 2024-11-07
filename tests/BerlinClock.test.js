const BerlinClock = require('./berlin-clock');

describe('Berlin Clock', () => {
    describe('convertTimestamp', () => {
        it('should return an object with the correct properties', () => {
            const clock = new BerlinClock();
            const result = clock.convertTimestamp();
            expect(result).toHaveProperty('hours');
            expect(result).toHaveProperty('minutes');
            expect(result).toHaveProperty('seconds');
            expect(result).toHaveProperty('timeStamp');
        });

        it('should return valid time values', () => {
            const clock = new BerlinClock();
            const result = clock.convertTimestamp();
            
            expect(result.hours).toBeGreaterThanOrEqual(0);
            expect(result.hours).toBeLessThanOrEqual(23);
            expect(result.minutes).toBeGreaterThanOrEqual(0);
            expect(result.minutes).toBeLessThanOrEqual(59);
            expect(result.seconds).toBeGreaterThanOrEqual(0);
            expect(result.seconds).toBeLessThanOrEqual(59);
        });
    });

    describe('convertMinutesBlock5', () => {
        it('should correctly convert minutes into five-minute blocks', () => {
            const clock = new BerlinClock();
            expect(clock.convertMinutesBlock5(0)).toBe(0);
            expect(clock.convertMinutesBlock5(5)).toBe(1);
            expect(clock.convertMinutesBlock5(10)).toBe(2);
            expect(clock.convertMinutesBlock5(25)).toBe(5);
            expect(clock.convertMinutesBlock5(59)).toBe(11);
        });

        it('should handle edge cases', () => {
            const clock = new BerlinClock();
            expect(clock.convertMinutesBlock5(-5)).toBe(-1);
            expect(clock.convertMinutesBlock5(60)).toBe(12);
            expect(clock.convertMinutesBlock5(4)).toBe(0);
        });
    });

});