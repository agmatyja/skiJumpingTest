const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    describe('should return proper total score for known examples', () => {
        const scoreBoard = [
            {'total': 131.8, 'distance': 111, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [19, 19.5, 19, 19, 19], 'wind':-14.4, 'gate': 3.2},                                  
            {'total': 125.9, 'distance': 106.5, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [18.5, 18.5, 18.5, 19, 19], 'wind':-13.5, 'gate': 6.4},                                    
            {'total': 125.9, 'distance': 106, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [18.5, 19, 18.5, 18.5, 18.5], 'wind':-12, 'gate': 6.4},                                  
            {'total': 125.5, 'distance': 106, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [18.5, 19, 19.5, 18.5, 19], 'wind':-13.4, 'gate': 6.4},                                  
            {'total': 124.9, 'distance': 104.5, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [18.5, 18.5, 19, 18.5, 19], 'wind':-10.5, 'gate': 6.4},                                    
            {'total': 122.8, 'distance': 103.5, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [18.5, 18, 18.5, 18.5, 18.5], 'wind':-10.1, 'gate': 6.4},                                  
            {'total': 121.6, 'distance': 106, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [17.5, 17.5, 18.5, 18.5, 18], 'wind':-14.8, 'gate': 6.4},                                    
            {'total': 120.3, 'distance': 103.5, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [18.5, 18.5, 19, 18.5, 18.5], 'wind':-9.4, 'gate': 3.2},                                   
            {'total': 120.2, 'distance': 108, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [18, 18.5, 18.5, 18.5, 19], 'wind':-15.3, 'gate': 0},                                    
            {'total': 119.9, 'distance': 100.5, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [17, 17.5, 18, 18, 18], 'wind':-5, 'gate': 6.4},                                   
            {'total': 119.4, 'distance': 105, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [18.5, 18, 18, 18.5, 17.5], 'wind':-12.3, 'gate': 3.2},                                  
            {'total': 119, 'distance': 106, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [17.5, 18, 18, 18.5, 18.5], 'wind':-14.7, 'gate': 3.2},                                    
            {'total': 118.7, 'distance': 103.5, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [18, 18, 18, 18.5, 18.5], 'wind':-13.2, 'gate': 6.4},                                  
            {'total': 117.2, 'distance': 109, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [17, 16.5, 18.5, 17.5, 18.5], 'wind':-17.8, 'gate': 0},                                  
            {'total': 114.5, 'distance': 104, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [17.5, 17.5, 18, 18, 18], 'wind':-17.4, 'gate': 6.4},                                    
            {'total': 113.9, 'distance': 104.5, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [18, 18, 18.5, 18.5, 18.5], 'wind':-14.1, 'gate': 0},                                  
            {'total': 113.9, 'distance': 107.5, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [17.5, 17.5, 18, 18.5, 18], 'wind':-18.6, 'gate': 0},                                  
            {'total': 111.1, 'distance': 103.5, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [18, 18, 18.5, 18.5, 18], 'wind':-14.4, 'gate': 0},                                    
            {'total': 110.3, 'distance': 103, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [17.5, 17.5, 18.5, 18.5, 18.5], 'wind':-14.2, 'gate': 0},                                    
            {'total': 109.6, 'distance': 99, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [18, 17.5, 17.5, 17.5, 18], 'wind':-8.6, 'gate': 3.2},                                    
            {'total': 109.2, 'distance': 99.5, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [18.5, 18, 18, 18, 18], 'wind':-11, 'gate': 3.2},                                   
            {'total': 108.6, 'distance': 102.5, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [18, 18, 18.5, 18.5, 18.5], 'wind':-15.4, 'gate': 0},                                  
            {'total': 106.8, 'distance': 101.5, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [17.5, 17.5, 18, 18, 18], 'wind':-13.7, 'gate': 0},                                    
            {'total': 106.2, 'distance': 98.5, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [17.5, 17.5, 17.5, 18, 18], 'wind':-11, 'gate': 3.2},                                   
            {'total': 104.1, 'distance': 98.5, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [17, 17, 17.5, 18, 17.5], 'wind':-8.9, 'gate': 0},                                  
            {'total': 103.5, 'distance': 98, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [17, 17, 17.5, 18, 17.5], 'wind':-8.5, 'gate': 0},                                    
            {'total': 101.1, 'distance': 97, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [18, 17.5, 17.5, 17.5, 17.5], 'wind':-12.6, 'gate': 3.2},                                 
            {'total': 100.1, 'distance': 99.5, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [17, 17, 17.5, 17.5, 18], 'wind':-14.9, 'gate': 0},                                 
            {'total': 99.5, 'distance': 96.5, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [18, 17, 17.5, 17.5, 17.5], 'wind':-13.2, 'gate': 3.2},                                  
            {'total': 99, 'distance': 94.5, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [17, 16.5, 17, 17, 17], 'wind':-5, 'gate': 0},                                 
            {'total': 98.8, 'distance': 93, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [17, 16.5, 17, 17, 17], 'wind':-8.6, 'gate': 6.4},                                 
            {'total': 98.7, 'distance': 98.5, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [17.5, 17.5, 17.5, 17.5, 18], 'wind':-14.8, 'gate': 0},                                  
            {'total': 98.6, 'distance': 97, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [18, 17, 17.5, 17, 17.5], 'wind':-11.4, 'gate': 0},                                    
            {'total': 92.1, 'distance': 94.5, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [17, 17, 17, 17, 16.5], 'wind':-11.9, 'gate': 0},                                    
            {'total': 92, 'distance': 88, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [16.5, 16, 16.5, 16.5, 16], 'wind':-3.4, 'gate': 6.4},                                   
            {'total': 92, 'distance': 95, 'hillSize': 'm', 'kPoint': 98, 'styleNotes': [17, 17, 17.5, 17.5, 17.5], 'wind':-14, 'gate': 0},                                  
            {'total': 208.3, 'distance': 227.5, 'hillSize': 'xl', 'kPoint': 200, 'styleNotes': [18, 18.5, 18.5, 17.5, 18.5], 'wind':-8.4, 'gate': 8.7},                                 
            {'total': 206.5, 'distance': 226, 'hillSize': 'xl', 'kPoint': 200, 'styleNotes': [18.5, 18.5, 18.5, 18.5, 18], 'wind':-8.9, 'gate': 8.7},                                   
            {'total': 205.8, 'distance': 223, 'hillSize': 'xl', 'kPoint': 200, 'styleNotes': [18.5, 18.5, 18.5, 18.5, 19], 'wind':-6, 'gate': 8.7},                                 
            {'total': 137.3, 'distance': 134, 'hillSize': 'l', 'kPoint': 120, 'styleNotes': [18.5, 19.5, 19, 19, 20], 'wind':-5.4, 'gate': 0},                                  
            {'total': 134.8, 'distance': 133, 'hillSize': 'l', 'kPoint': 120, 'styleNotes': [18.5, 18.5, 19, 19, 19], 'wind':-5.1, 'gate': 0},                                  

        ];

        scoreBoard.map((jump, id) => {
            it('Jump ' + (id + 1), () => {
                const actual = calculateTotalPoints(jump.distance, jump.hillSize, jump.kPoint, jump.styleNotes, jump.wind, jump.gate);
                const expected = jump.total;
                assert.equal(actual, expected);
            });
        });
    });
});
