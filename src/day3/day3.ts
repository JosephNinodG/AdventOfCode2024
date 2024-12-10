import * as fs from 'fs';

const data = fs.readFileSync('src/day3/day3.txt', 'utf-8');

console.log(day3_1(data))
console.log(day3_2(data))

function day3_1(data: string) : number {
    const fileRE = /mul\(\d{1,3},\d{1,3}\)/g;
    const mulRE = /\d{1,3},\d{1,3}/g;

    let list = data.match(fileRE)
    let total: number = 0
    
    if (list != null){
        for (var entry of list) {
            let mulStr = entry.match(mulRE)
            if (mulStr != null) {
                let mulNum = mulStr[0].split(',').map(Number)
                total = total + (mulNum[0]*mulNum[1])
            }
        }
    }
    return total
}

function day3_2(data: string) : number {
    const fileRE = /do\(\)|don't\(\)|mul\(\d{1,3},\d{1,3}\)/g;
    const mulRE = /\d{1,3},\d{1,3}/g;

    let list = data.match(fileRE)
    let total: number = 0

    //console.log(list)
    
    if (list != null){
        let dont: boolean = false
        for (var entry of list) {
            if (entry == "don't()") {
                dont = true
            }

            if (entry == "do()") {
                dont = false
            }

            if (dont) {
                continue
            } else {
                let mulStr = entry.match(mulRE)
                if (mulStr != null) {
                    let mulNum = mulStr[0].split(',').map(Number)
                    total = total + (mulNum[0]*mulNum[1])
                }
            }
        }
    }
    return total
}
