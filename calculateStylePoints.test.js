const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    it('should return 60 for maximum notes', () => {
        const actual = calculateStylePoints([20, 20, 20, 20, 20]);
    
        const expected = 60;
    
        assert.equal(actual, expected);
    });

    it('should return 0 for minimum notes', () => {
        const actual = calculateStylePoints([0, 0, 0, 0, 0]);
    
        const expected = 0;
    
        assert.equal(actual, expected);
    });

    it('order doesn\'t matter', () => {
        const actual = calculateStylePoints([15, 16, 17, 14, 18]);
    
        const expected = 48;
    
        assert.equal(actual, expected);
    });

    it('order doesn\'t matter with fractions', () => {
        const actual = calculateStylePoints([6.5, 9.5, 8.5, 7.5, 8]);
    
        const expected = 24;
    
        assert.equal(actual, expected);             
    });    

    describe('should skip minimum and maximum note', () => {
        it('test 1', () => {
            const actual = calculateStylePoints([10, 12, 11, 14, 0]);
            
            const expected = 33;
            
            assert.equal(actual, expected);
        });

        it('test 2', () => {
            const actual = calculateStylePoints([20, 0, 0, 0, 0]);

            const expected = 0;

            assert.equal(actual, expected);
        });
            
        it('with fractions', () => {
            const actual = calculateStylePoints([20, 15.5, 15.5, 15.5, 0]);
            
            const expected = 46.5;
            
            assert.equal(actual, expected);
        });
        
        it('only one maximum note is skipped', () => {
            const actual = calculateStylePoints([20, 20, 10, 15, 0]);
        
            const expected = 45;
        
            assert.equal(actual, expected);
        });

        it('only one minimum note is skipped', () => {
            const actual = calculateStylePoints([20, 20, 15, 15, 15]);
        
            const expected = 50;
        
            assert.equal(actual, expected);
        });
    });
});      
    