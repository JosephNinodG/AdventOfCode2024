"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var data = fs.readFileSync('day1/day1.txt', 'utf-8');
var dataList = data.split('\n');
var leftList = [];
var rightList = [];
for (var _i = 0, dataList_1 = dataList; _i < dataList_1.length; _i++) {
    var line = dataList_1[_i];
    var entries = line.split(/[ ,]+/);
    leftList.push(+entries[0]);
    rightList.push(+entries[1]);
}
day1_1(leftList, rightList);
day1_2(leftList, rightList);
function day1_1(leftList, rightList) {
    leftList.sort(function (a, b) { return a - b; });
    rightList.sort(function (a, b) { return a - b; });
    var total = 0;
    for (var i = 0; i < leftList.length; i++) {
        total = total + Math.abs(leftList[i] - rightList[i]);
    }
    console.log(total);
}
function day1_2(leftList, rightList) {
    var total = 0;
    for (var _i = 0, leftList_1 = leftList; _i < leftList_1.length; _i++) {
        var entryL = leftList_1[_i];
        var count = 0;
        for (var _a = 0, rightList_1 = rightList; _a < rightList_1.length; _a++) {
            var entryR = rightList_1[_a];
            if (entryL == entryR) {
                count++;
            }
        }
        total = total + (entryL * count);
    }
    console.log(total);
}
