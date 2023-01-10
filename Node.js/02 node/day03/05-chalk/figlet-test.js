// const figlet = require('figlet');
import figlet from 'figlet'

figlet('bilibili', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});