const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');


    describe('calculateDistancePoints', () => {
        describe('returns distance points for xl hill', () => {
         
            it('should have distance bigger than ppk', () => {
                const actual = calculateDistancePoints(210, 'xl', 200);
        
                const expected = 132;
        
                assert.equal(actual, expected);
            });

            it('should have distance equal ppk', () => {
                const actual = calculateDistancePoints(200, 'xl', 200);

                const expected = 120;

                assert.equal(actual, expected);
            });
        
            it('should have distance smaller than ppk', () => {
                const actual = calculateDistancePoints(195, 'xl', 200);
        
                const expected = 114;
        
                assert.equal(actual, expected);
            });
        });

        describe('returns distance points for l hill', () => {
         
            it('should have distance bigger than ppk', () => {
                const actual = calculateDistancePoints(122, 'l', 120);
        
                const expected = 63.6;
        
                assert.equal(actual, expected);
            });

            it('should have distance equal ppk', () => {
                const actual = calculateDistancePoints(120, 'l', 120);

                const expected = 60;

                assert.equal(actual, expected);
            });
        
            it('should have distance smaller than ppk', () => {
                const actual = calculateDistancePoints(115, 'l', 120);
        
                const expected = 51;
        
                assert.equal(actual, expected);
            });
        });

        describe('returns distance points for m hill', () => {
         
            it('should have distance bigger than ppk', () => {
                const actual = calculateDistancePoints(102, 'm', 98);
        
                const expected = 68;
        
                assert.equal(actual, expected);
            });

            it('should have distance equal ppk', () => {
                const actual = calculateDistancePoints(98, 'm', 98);

                const expected = 60;

                assert.equal(actual, expected);
            });
        
            it('should have distance smaller than ppk', () => {
                const actual = calculateDistancePoints(95, 'm', 98);
        
                const expected = 54;
        
                assert.equal(actual, expected);
            });
        });
    });

