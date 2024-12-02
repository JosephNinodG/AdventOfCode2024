import * as fs from 'fs';

const data = fs.readFileSync('day1/day1.txt', 'utf-8');
const dataList = data.split('\n');

let leftList: number[] = [];
let rightList: number[] = [];

for (var line of dataList){
    const entries = line.split(/[ ,]+/);
    leftList.push(+entries[0]);
    rightList.push(+entries[1]);
}

day1_1(leftList, rightList);
day1_2(leftList, rightList);

function day1_1(leftList: number[], rightList: number[]) {
    leftList.sort((a, b) => a - b);
    rightList.sort((a, b) => a - b);
    
    let total = 0;
    for (let i = 0; i < leftList.length; i++){
        total = total + Math.abs(leftList[i] - rightList[i]);
    }

    console.log(total)
}

function day1_2(leftList: number[], rightList: number[]) {
    let total = 0;

    for (var entryL of leftList) {
        let count = 0;
        for (var entryR of rightList) {
            if (entryL == entryR) {
                count++
            }
        }

        total = total + (entryL*count)
    }

    console.log(total)
}