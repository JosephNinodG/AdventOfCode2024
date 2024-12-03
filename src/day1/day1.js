"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const data = fs.readFileSync('day1/day1.txt', 'utf-8');
const dataList = data.split('\n');
let leftList = [];
let rightList = [];
for (var line of dataList) {
    const entries = line.split(/[ ,]+/);
    leftList.push(+entries[0]);
    rightList.push(+entries[1]);
}
day1_1(leftList, rightList);
day1_2(leftList, rightList);
function day1_1(leftList, rightList) {
    leftList.sort((a, b) => a - b);
    rightList.sort((a, b) => a - b);
    let total = 0;
    for (let i = 0; i < leftList.length; i++) {
        total = total + Math.abs(leftList[i] - rightList[i]);
    }
    console.log(total);
}
function day1_2(leftList, rightList) {
    let total = 0;
    for (var entryL of leftList) {
        let count = 0;
        for (var entryR of rightList) {
            if (entryL == entryR) {
                count++;
            }
        }
        total = total + (entryL * count);
    }
    console.log(total);
}
//# sourceMappingURL=day1.js.map