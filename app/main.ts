import * as fs from 'fs';

class Item {
    val: number;
    index: number;
    size: number = -1;

    constructor(val: number, index: number) {
        this.val = val;
        this.index = index;
    }
}

function init(): number[] {
    const inputFilename: string = process.argv.length > 2
        ? process.argv[2]
        : '01.in.txt';
    console.log('\n inputFilename: ' + inputFilename);

    const inputContent: string = fs.readFileSync(inputFilename, { encoding: 'utf8' });
    console.log(`inputContent:\n${inputContent}\n`);

    const inputValues: string[] = inputContent.split('\n');
    inputValues.shift();
    let sequence = inputValues.map(Number);
    return sequence;
}

function sort(sequence: number[]): number[] {
    //console.log(sequence);
    let output: number[] = [];
    let itemSequence: Item[] = [];
    let itemSequence02: Map<number, number> = new Map();
    for (let i = 0; i < sequence.length; i++) {
        itemSequence.push(new Item(sequence[i], i + 1));
    }
    itemSequence.sort((a, b) => {
        if (a.val < b.val) {
            return -1;
        }
        if (a.val > b.val) {
            return 1;
        }
        console.log('EQUAL!')
        return 0;
    });

    for (let i = 0; i < sequence.length; i++) {
        if (i % 2 === 0) {
            itemSequence[i].size = 1000;
            itemSequence02.set(itemSequence[i].val, itemSequence[i].size);
        } else {
            itemSequence[i].size = 10 + i;
            itemSequence02.set(itemSequence[i].val, itemSequence[i].size);
        }

    }


    console.log(itemSequence);

    let x: any = 0;
    for (let i = 0; i < sequence.length; i++) {
        x = itemSequence02.get(sequence[i]);
        output.push(x);
    }
    return output;
}

function formatOutput(input: number[]): string {
    let formatedOutput: string = '';
    formatedOutput = input.join('\n');
    formatedOutput = `${input.length}\n` + formatedOutput
    return formatedOutput;
}

let sequence: number[] = init();
let output = sort(sequence);
let result = formatOutput(output);

const outputContent = result;
//console.log('outputContent: ', outputContent);
console.log('writing into the file ./output.txt');
fs.writeFileSync('./output.txt', outputContent, { encoding: 'utf8' });