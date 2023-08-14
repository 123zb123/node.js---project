import fs from 'fs';
import { promisify } from 'util';
import _ from 'lodash'
const readFileAsync = promisify(fs.readFile);
async function returnFile() {
    try {
        const textData = await readFileAsync('C:\\Users\\ZVIKA\\Documents\\project idf\\node-js\\data\\text.txt', 'utf8');
        return textData;
    } catch (err) {
        throw err;
    }
}

async function printText() {
    try {
        let textData = await returnFile();
        console.log(textData);
    } catch (error) {
        console.error(error);
    }
}


async function countWords() {
    try {
        let textData = await returnFile();
        console.log(_.words(textData).length)
    } catch (error) {
        console.error(error);
    }
}


async function reverseFile() {
    try {
        let str = ''
        let textData = await returnFile()
        _.reverse(_.words(textData)).forEach(element => {
            str += element + ' '
        })
        console.log(str)
    } catch (error) {
        console.error(error);
    }
}

async function uniqWords() {
    try {
        let textData = await returnFile();
        console.log(_.uniq(_.words(textData)))
    } catch (error) {
        console.error(error);
    }
}

async function countUniqWords() {
    try {
        let textData = await returnFile();
        console.log(_.uniq(textData).length)
    } catch (error) {
        console.error(error);
    }
}


async function UniqWordsToUpperCase() {
    try {
        let textData = await returnFile();
        let uniqueWords = _.uniq(_.words(textData.toUpperCase()));
        let wordsString = uniqueWords.join(' ');

        fs.appendFile('write.txt',
            wordsString + '\n' + '\n',
            (err) => {
                if (err) {
                    console.error(err);
                }
            }
        );
    } catch (error) {
        console.error(error);
    }
}


async function uniqWordsLengthBigThan5() {
    try {
        let textData = await returnFile();
        let wordsArray = _.uniq(_.words(textData));
        let filteredWords = wordsArray.filter(element => element.length > 5);
        let wordsToWrite = filteredWords.join(' ');

        fs.appendFile('write.txt', wordsToWrite + '\n' + '\n',(err) => {
                if (err) {
                    console.error(err);
                }
            }
        );
    } catch (error) {
        console.error(error);
    }
}


async function challenge() {
    try {
        let textData = await returnFile();
        let words = _.words(textData.toLowerCase()); 
        words.forEach(element => {
            let count = 0;
            for (let i = 0; i < element.length; i++) {
                if (element[i] === 'a' || element[i] === 'i' || element[i] === 'o' || element[i] === 'e' || element[i] === 'u') {
                    count++;
                }
            }
            let str = 'word: ' + element + ', count: ' + count;
            fs.appendFile('write.txt', str + '\n', (err) => {
                if (err){
                    console.error(err)
                }
            } )
        });
    } catch (error) {
        console.error(error);
    }
}

let rf

export default  rf = {
    challenge,
    uniqWordsLengthBigThan5,
    UniqWordsToUpperCase,
    countUniqWords,
    uniqWords,
    reverseFile,
    countWords,
    printText
}