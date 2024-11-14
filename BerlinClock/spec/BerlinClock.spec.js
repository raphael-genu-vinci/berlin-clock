import { BerlinClock } from '../src/components/Berlin-clock.js';

describe('Berlin Clock', () => {
    describe('convertTimestamp', () => {
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
            expect(clock.convertInBlock5(0)).toBe(0);
            expect(clock.convertInBlock5(5)).toBe(1);
            expect(clock.convertInBlock5(10)).toBe(2);
            expect(clock.convertInBlock5(25)).toBe(5);
            expect(clock.convertInBlock5(59)).toBe(11);
        });

        it('should handle edge cases', () => {
            const clock = new BerlinClock();
            expect(clock.convertInBlock5(-5)).toBe(-1);
            expect(clock.convertInBlock5(60)).toBe(12);
            expect(clock.convertInBlock5(4)).toBe(0);
        });
    });

    describe('convertMinutesBlock1', () => {
        it('should correctly convert minutes into one-minute blocks', () => {
            const clock = new BerlinClock();
            expect(clock.convertInBlock1(0)).toBe(0);
            expect(clock.convertInBlock1(1)).toBe(1);
            expect(clock.convertInBlock1(2)).toBe(2);
            expect(clock.convertInBlock1(3)).toBe(3);
            expect(clock.convertInBlock1(4)).toBe(4);
            expect(clock.convertInBlock1(5)).toBe(0);
        });

        it('should handle minutes above 5', () => {
            const clock = new BerlinClock();
            expect(clock.convertInBlock1(6)).toBe(1);
            expect(clock.convertInBlock1(7)).toBe(2);
            expect(clock.convertInBlock1(8)).toBe(3);
            expect(clock.convertInBlock1(9)).toBe(4);
            expect(clock.convertInBlock1(10)).toBe(0);
        });
    });

    describe('toggleSecondLight' , () => {
        it('should correctly return a boolean showing if it is a even number', () => {
            const clock = new BerlinClock();
            expect(clock.toggleSecondLight(0)).toBeTrue();
            expect(clock.toggleSecondLight(1)).toBeFalse();
            expect(clock.toggleSecondLight(2)).toBeTrue();
            expect(clock.toggleSecondLight(3)).toBeFalse();
            expect(clock.toggleSecondLight(4)).toBeTrue();
        });

        it('should handle edge cases', () => {
            const clock = new BerlinClock();
            expect(clock.toggleSecondLight(-7)).toBeFalse();
            expect(clock.toggleSecondLight(62)).toBeTrue();
            expect(clock.toggleSecondLight(4)).toBeTrue();
        });
    });

});