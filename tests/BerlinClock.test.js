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
});