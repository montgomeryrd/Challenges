'use strict';

module.exports = function createReport(name){

    let current, bird, tempName, birdName, answer = [];
    
    for(let i = 0 ; i < name.length ; i++) {
        current = name[i].split(' ');

        if(current.length === 2) {
            bird = current[0].split('');
            if(bird.length < 7) {
                birdName = '';
                while(bird.length > 0) {
                    birdName = `${birdName}${bird[0]}`
                    bird.shift();
                }
                birdName = birdName.toUpperCase();
                answer.push(birdName, parseInt(current[1]));
            } else {
                birdName = `${bird[0]}${bird[1]}${bird[2]}${bird[3]}${bird[4]}${bird[5]}`;
                birdName = birdName.toUpperCase();
                answer.push(birdName, parseInt(current[1]));
            }
        }
        
        if(current.length === 3) {
            bird = current[0].split('');
            if(bird.length < 3) {
                birdName = '';
                while(bird.length > 0) {
                    birdName = `${birdName}${bird[0]}`
                    bird.shift();
                }
                birdName = birdName.toUpperCase();
                tempName = birdName;
            } else {
                birdName = `${bird[0]}${bird[1]}${bird[2]}`;
                birdName = birdName.toUpperCase();
                tempName = birdName;
            }

            bird = current[1].split('');
            if(bird.length < 3) {
                birdName = '';
                while(bird.length > 0) {
                    birdName = `${birdName}${bird[0]}`
                    bird.shift();
                }
                birdName = birdName.toUpperCase();
                tempName = `${tempName}${birdName}`;
                answer.push(tempName, parseInt(current[2]));
            } else {
                birdName = `${bird[0]}${bird[1]}${bird[2]}`;
                birdName = birdName.toUpperCase();
                tempName = `${tempName}${birdName}`;
                answer.push(tempName, parseInt(current[2]));
            }
        }
    }
    return answer;
}