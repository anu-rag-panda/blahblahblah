import jsonfile from 'jsonfile';
import moment from 'moment';
import simpleGit from 'simple-git';

const root = './';
const path = './data.json';
const date = moment().subtract(1, 'day').format();

const data = {
    date: date,
}

jsonfile.writeFile(path, data, ()=>{
    simpleGit().add([root]).commit(date, { '--author': 'Anurag Panda', '--date': date }).push();
});

