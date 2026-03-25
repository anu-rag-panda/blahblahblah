import jsonfile from 'jsonfile';
import moment from 'moment';
import simpleGit from 'simple-git';

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
    if (n <= 0) return simpleGit().push();
    const x = Math.floor(Math.random() * 54);
    const y = Math.floor(Math.random() * 6);
    const date = moment().subtract(1, "y").add(1, "d").add(x, "w").add(y, "d").format();

    const data = {
        date: date,
    };

    jsonfile.writeFile(path, data, () => {
        simpleGit().add([path]).commit(date, { "--date": date }, makeCommits.bind(this, n - 1)); //or remove makeCommits.bind(this, n-1) and add .push()
    });
};

makeCommits(100); //usage

