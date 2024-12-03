"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var data = fs.readFileSync('src/day2/day2.txt', 'utf-8');
var dataList = data.split('\n');
var levels = [];
for (var _i = 0, dataList_1 = dataList; _i < dataList_1.length; _i++) {
    var line = dataList_1[_i];
    var level_1 = [];
    var entries = line.split(/[ ,]+/);
    for (var _a = 0, entries_1 = entries; _a < entries_1.length; _a++) {
        var entry = entries_1[_a];
        level_1.push(+entry);
    }
    levels.push(level_1);
}
var day2_1_numOfSafeLevels = 0;
var day2_2_numOfSafeLevels = 0;
for (var _b = 0, levels_1 = levels; _b < levels_1.length; _b++) {
    var level = levels_1[_b];
    if (level[0] > level[1]) {
        var day2_1_output = checkForSafeLevels(level, false);
        if (day2_1_output == true) {
            day2_1_numOfSafeLevels++;
        }
    }
    else if (level[0] < level[1]) {
        var day2_1_output = checkForSafeLevels(level, true);
        if (day2_1_output == true) {
            day2_1_numOfSafeLevels++;
        }
    }
}
for (var _c = 0, levels_2 = levels; _c < levels_2.length; _c++) {
    var level = levels_2[_c];
    for (var i = 0; i < level.length; i++) {
        var filteredLevels = removeElement(level, i);
        if (filteredLevels[0] > filteredLevels[1]) {
            var day2_2_output = checkForSafeLevels(filteredLevels, false);
            if (day2_2_output == true) {
                day2_2_numOfSafeLevels++;
                break;
            }
        }
        else if (filteredLevels[0] < filteredLevels[1]) {
            var day2_2_output = checkForSafeLevels(filteredLevels, true);
            if (day2_2_output == true) {
                day2_2_numOfSafeLevels++;
                break;
            }
        }
    }
}
console.log(day2_1_numOfSafeLevels);
console.log(day2_2_numOfSafeLevels);
function checkForSafeLevels(level, isIncrease) {
    for (var i = 0; i < level.length; i++) {
        if (i != level.length - 1) {
            var currentNum = level[i];
            var nextNum = level[i + 1];
            if (isIncrease) {
                if (currentNum > nextNum || currentNum == nextNum || (nextNum - currentNum) > 3) {
                    return false;
                }
            }
            else {
                if (currentNum < nextNum || currentNum == nextNum || (currentNum - nextNum) > 3) {
                    return false;
                }
            }
        }
    }
    return true;
}
function removeElement(level, index) {
    var newList = [];
    for (var i = 0; i < level.length; i++) {
        if (i == index) {
            continue;
        }
        newList.push(level[i]);
    }
    return newList;
}
function filterOutBadLevels(level, isIncrease) {
    for (var i = 0; i < level.length; i++) {
        if (i != level.length - 1) {
            var currentNum = level[i];
            var nextNum = level[i + 1];
            if (isIncrease) {
                if (currentNum > nextNum || currentNum == nextNum || (nextNum - currentNum) > 3) {
                    level.splice(i, 1);
                    break;
                }
            }
            else {
                if (currentNum < nextNum || currentNum == nextNum || (currentNum - nextNum) > 3) {
                    level.splice(i, 1);
                    break;
                }
            }
        }
    }
    return level;
}
function day2_2(level) {
    var isIncrease = false;
    for (var i = 0; i < level.length; i++) {
        if (i == 0) {
            if (level[i] == level[i + 1]) {
                level.splice(i, 1);
                break;
            }
            else if (level[0] < level[1]) {
                isIncrease = true;
            }
            else if (level[0] > level[1]) {
                isIncrease = false;
            }
        }
        if (i != level.length - 1) {
            var currentNum = level[i];
            var nextNum = level[i + 1];
            if (currentNum == nextNum) {
                level.splice(i, 1);
                break;
            }
            if (isIncrease) {
                if ((nextNum - currentNum) > 3 || currentNum > nextNum) {
                    level.splice(i + 1, 1);
                    break;
                }
            }
            else {
                if ((currentNum - nextNum) > 3 || currentNum < nextNum) {
                    level.splice(i + 1, 1);
                    break;
                }
            }
        }
    }
    return level;
}
