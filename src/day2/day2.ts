import * as fs from 'fs';

const data = fs.readFileSync('src/day2/day2.txt', 'utf-8');
const dataList = data.split('\n');

let levels: number[][] = []

for (var line of dataList){
    let level: number[] = []
    const entries = line.split(/[ ,]+/);
    for (var entry of entries) {
        level.push(+entry)
    }
    levels.push(level);
}

let day2_1_numOfSafeLevels: number = 0
let day2_2_numOfSafeLevels: number = 0

for (var level of levels) {
    if (level[0] > level[1]) {
        let day2_1_output = checkForSafeLevels(level, false)
        if (day2_1_output == true) {
            day2_1_numOfSafeLevels++
        }
    } else if (level[0] < level[1]) {
        let day2_1_output = checkForSafeLevels(level, true)
        if (day2_1_output == true) {
            day2_1_numOfSafeLevels++
        }
    }
}

for (var level of levels) {

    for (let i = 0; i < level.length; i++) {

        let filteredLevels = removeElement(level, i)

        if (filteredLevels[0] > filteredLevels[1]) {
            let day2_2_output = checkForSafeLevels(filteredLevels, false)
            if (day2_2_output == true) {
                day2_2_numOfSafeLevels++
                break;
            }
        } else if (filteredLevels[0] < filteredLevels[1]) {
            let day2_2_output = checkForSafeLevels(filteredLevels, true)
            if (day2_2_output == true) {
                day2_2_numOfSafeLevels++
                break;
            }
        }

    }
}

console.log(day2_1_numOfSafeLevels)
console.log(day2_2_numOfSafeLevels)

function checkForSafeLevels(level: number[], isIncrease: boolean) : boolean {
    for (let i = 0; i < level.length; i++) {

        if (i != level.length - 1) {
            let currentNum = level[i]
            let nextNum = level[i+1]

            if (isIncrease){
                if (currentNum > nextNum || currentNum == nextNum || (nextNum-currentNum) > 3) {
                    return false
                }
            } else {
                if (currentNum < nextNum || currentNum == nextNum || (currentNum-nextNum) > 3) {
                    return false
                }
            }
        }
    }

    return true
}

function removeElement(level: number[], index: number) : number[] {
    let newList: number[] = []
    for (let i = 0; i < level.length; i++) {
        if (i == index) {
            continue
        }
        newList.push(level[i])
    }

    return newList
}