const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');



const checkWorkingHours = (req, res, next) => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentHours = currentDate.getHours();

    if (currentDay >= 1 && currentDay <= 5 && currentHours >= 9 && currentHours <= 17) {
        next();
    } else {
        res.send('Sorry !!! We are close. Visit us during working hours (Monday to Friday, 9am to 5pm)');
    }
};

app.use(checkWorkingHours);



app.get('/', (req, res) => {
    res.render('Home');
});

app.get('/Services', (req, res) => {
    res.render('Services');
});

app.get('/Contact', (req, res) => {
    res.render('Contact');
});



app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});