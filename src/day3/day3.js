"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var data = fs.readFileSync('src/day3/day3.txt', 'utf-8');
console.log(day3_1(data));
console.log(day3_2(data));
function day3_1(data) {
    var fileRE = /mul\(\d{1,3},\d{1,3}\)/g;
    var mulRE = /\d{1,3},\d{1,3}/g;
    var list = data.match(fileRE);
    var total = 0;
    if (list != null) {
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var entry = list_1[_i];
            var mulStr = entry.match(mulRE);
            if (mulStr != null) {
                var mulNum = mulStr[0].split(',').map(Number);
                total = total + (mulNum[0] * mulNum[1]);
            }
        }
    }
    return total;
}
function day3_2(data) {
    var fileRE = /do\(\)|don't\(\)|mul\(\d{1,3},\d{1,3}\)/g;
    var mulRE = /\d{1,3},\d{1,3}/g;
    var list = data.match(fileRE);
    var total = 0;
    //console.log(list)
    if (list != null) {
        var dont = false;
        for (var _i = 0, list_2 = list; _i < list_2.length; _i++) {
            var entry = list_2[_i];
            if (entry == "don't()") {
                dont = true;
            }
            if (entry == "do()") {
                dont = false;
            }
            if (dont) {
                continue;
            }
            else {
                var mulStr = entry.match(mulRE);
                if (mulStr != null) {
                    var mulNum = mulStr[0].split(',').map(Number);
                    total = total + (mulNum[0] * mulNum[1]);
                }
            }
        }
    }
    return total;
}
