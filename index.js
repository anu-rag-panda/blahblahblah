import jsonfile from 'jsonfile';
import moment from 'moment';
import simpleGit from 'simple-git';
import random from "random";

const root = './';
const path = './data.json';
//const date = moment().subtract(1, 'day').format(); make commit yesterday

/* add to a specific location (x -> row, y -> column)
const markCommit = (x, y) => {
    const date = moment()
    .subtract(1, "y")
    .add(1, "d")
    .add(x, "w")
    .add(y, "d")
    .format();
}
*/

/* for upper two methods
const data = {
    date: date,
}

jsonfile.writeFile(path, data, ()=>{
    simpleGit().add([root]).commit(date, { '--author': 'Anurag Panda', '--date': date }).push();
});
*/

const makeCommits = (n) => {
    if (n==0) return simpleGit.push();
    const x = random.default.int(0, 54);
    const y = random.default.int(0, 6);
    const date = moment().subtract(1, "y").add(1, "d").add(x, "w").add(y, "d").format();

    const data = {
        date: date,
    }

    jsonfile.writefile(path, data, () => {
        simpleGit().add([path]).commit(date, { "--date": date }, makeCommits.bind(this,--n); //or remove makeCommits.bind(this, --n) and add .push()
    });
};

makeCommits(100); //usage

