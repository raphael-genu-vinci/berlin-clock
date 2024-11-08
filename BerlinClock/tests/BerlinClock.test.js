const BerlinClock = require('../src/components/Berlin-clock.js');

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

    describe('convertMinutesBlock1', () => {
        it('should correctly convert minutes into one-minute blocks', () => {
            const clock = new BerlinClock();
            expect(clock.convertMinutesBlock1(0)).toBe(0);
            expect(clock.convertMinutesBlock1(1)).toBe(1);
            expect(clock.convertMinutesBlock1(2)).toBe(2);
            expect(clock.convertMinutesBlock1(3)).toBe(3);
            expect(clock.convertMinutesBlock1(4)).toBe(4);
            expect(clock.convertMinutesBlock1(5)).toBe(0);
        });

        it('should handle minutes above 5', () => {
            const clock = new BerlinClock();
            expect(clock.convertMinutesBlock1(6)).toBe(1);
            expect(clock.convertMinutesBlock1(7)).toBe(2);
            expect(clock.convertMinutesBlock1(8)).toBe(3);
            expect(clock.convertMinutesBlock1(9)).toBe(4);
            expect(clock.convertMinutesBlock1(10)).toBe(0);
        });
    });

    describe('convertHoursBlock5', () => {
        it('should correctly convert hours into five-hour blocks', () => {
            const clock = new BerlinClock();
            expect(clock.convertHoursBlock5(0)).toBe(0);
            expect(clock.convertHoursBlock5(1)).toBe(1);
            expect(clock.convertHoursBlock5(2)).toBe(2);
            expect(clock.convertHoursBlock5(3)).toBe(3);
            expect(clock.convertHoursBlock5(4)).toBe(4);
            expect(clock.convertHoursBlock5(5)).toBe(5);
            expect(clock.convertHoursBlock5(6)).toBe(6);
            expect(clock.convertHoursBlock5(7)).toBe(7);
            expect(clock.convertHoursBlock5(8)).toBe(8);
            expect(clock.convertHoursBlock5(9)).toBe(9);
            expect(clock.convertHoursBlock5(10)).toBe(10);
            expect(clock.convertHoursBlock5(11)).toBe(11);
            expect(clock.convertHoursBlock5(12)).toBe(0);
        });
    });

    describe('convertHoursBlock1', () => {
        it('should correctly convert hours into one-hour blocks', () => {
            const clock = new BerlinClock();
            expect(clock.convertHoursBlock1(0)).toBe(0);
            expect(clock.convertHoursBlock1(1)).toBe(1);
            expect(clock.convertHoursBlock1(2)).toBe(2);
            expect(clock.convertHoursBlock1(3)).toBe(3);
            expect(clock.convertHoursBlock1(4)).toBe(4);
            expect(clock.convertHoursBlock1(5)).toBe(5);
            expect(clock.convertHoursBlock1(6)).toBe(6);
            expect(clock.convertHoursBlock1(7)).toBe(7);
            expect(clock.convertHoursBlock1(8)).toBe(8);
            expect(clock.convertHoursBlock1(9)).toBe(9);
            expect(clock.convertHoursBlock1(10)).toBe(10);
            expect(clock.convertHoursBlock1(11)).toBe(11);
        });
    });

    describe('toggleSecondLight', () => {
        it('should correctly toggle the second light', () => {
            const clock = new BerlinClock();
            expect(clock.toggleSecondLight(0)).toBe(false);
            expect(clock.toggleSecondLight(1)).toBe(true);
            expect(clock.toggleSecondLight(2)).toBe(false);
            expect(clock.toggleSecondLight(3)).toBe(true);
            expect(clock.toggleSecondLight(4)).toBe(false);
            expect(clock.toggleSecondLight(5)).toBe(true);
            expect(clock.toggleSecondLight(6)).toBe(false);
            expect(clock.toggleSecondLight(7)).toBe(true);
            expect(clock.toggleSecondLight(8)).toBe(false);
            expect(clock.toggleSecondLight(9)).toBe(true);
            expect(clock.toggleSecondLight(10)).toBe(false);
            expect(clock.toggleSecondLight(11)).toBe(true);
            expect(clock.toggleSecondLight(12)).toBe(false);
        });
    });

    describe('convertTime', () => {
        it('should return an object with the correct properties', () => {
            const clock = new BerlinClock();
            const result = clock.convertTime();
            expect(result).toHaveProperty('hours');
            expect(result).toHaveProperty('minutes');
            expect(result).toHaveProperty('seconds');
            expect(result).toHaveProperty('timeStamp');
        });
    });

    describe('convertTime', () => {
        it('should return an object with the correct properties', () => {
            const clock = new BerlinClock();
            const result = clock.convertTime();
            expect(result).toHaveProperty('hours');
            expect(result).toHaveProperty('minutes');
            expect(result).toHaveProperty('seconds');
            expect(result).toHaveProperty('timeStamp');
        });
    });

    describe('convertAll', () => {
        it('should return an object with the correct properties', () => {
            const clock = new BerlinClock();
            const result = clock.convertAll();
            expect(result).toHaveProperty('toggleLight');
            expect(result).toHaveProperty('hoursBlock5');
            expect(result).toHaveProperty('hoursBlock1');
            expect(result).toHaveProperty('minutesBlock5');
            expect(result).toHaveProperty('minutesBlock1');
        });
    });
});