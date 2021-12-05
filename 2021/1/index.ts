import {input} from './input'

function countIncreseMeasurments(Measurments: Array<number>): number {
    let ret = 0;
    for (let i=0; i<Measurments.length; i++) {
        if (i != 0 && Measurments[i] > Measurments[i-1]) {
            ret++;
        }
    }
    return ret;
}

// console.log(countIncreseMeasurments(input));

function countIncreseSliWindows(Measurments: Array<number>): number {
    let ret = 0;
    for (let i=0; i<Measurments.length-3; i++) {
        let winA = Measurments[i]+Measurments[i+1]+Measurments[i+2];
        let winB = Measurments[i+1]+Measurments[i+2]+Measurments[i+3];
        if(winA < winB) ret++;
    }
    return ret;
}

console.log(countIncreseSliWindows(input));