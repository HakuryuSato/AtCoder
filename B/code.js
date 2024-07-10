// // テスト用 ---------------------------------------------------------------------------------------------------
// const readline = require("readline");
// const fs = require("fs");
// const path = require("path");

// const file_number= 1
// const file = `input${file_number}.txt`;

// const rl = readline.createInterface({
//     input: fs.createReadStream(path.join(__dirname, file)),
//     output: process.stdout,
// });

// テスト用 ---------------------------------------------------------------------------------------------------

// // 本番用 ---------------------------------------------------------------------------------------------------
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// // 本番用 ---------------------------------------------------------------------------------------------------




lineCount = 0;
lines=[];
rl.on("line", (line) => {
    if(lineCount===0){
        N=Number(line);
    }else{
        lines.push(line.split(" ").map(Number));
    }


    lineCount++;
}).on("close", () => {
    main();
});

function findIndexOfMax(arr) {
    if (arr.length === 0) return -1; // 配列が空の場合

    let maxIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
    }
    return maxIndex+1;
}


function main() {
    // console.log(N,lines)


    // N回繰り返す
    for(i=0;i<N;i++){
        // console.log(i)


        length_list=[]
        
        // 全てのlines内の値から、最大値を求める
        for(j=0;j<N;j++){
            if(j===i){
                length_list.push(0)
            }else{
                x=lines[i][0]-lines[j][0]
                y=lines[i][1]-lines[j][1]
                // length = x+y
                length = Math.sqrt(x * x + y * y)
                length_list.push(Math.abs(length))
                // console.log(length)
                


            }

        }
        // console.log(length_list)
        console.log(findIndexOfMax(length_list))




    }

}
