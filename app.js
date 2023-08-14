import fr from './readFile.js'
import fs from 'fs';
import { promisify } from 'util';
import _ from 'lodash'
const readFileAsync = promisify(fs.readFile);

fr.UniqWordsToUpperCase()
fr.uniqWordsLengthBigThan5()
fr.challenge()