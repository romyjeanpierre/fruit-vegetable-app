const express = require('express');
const jsxEngine = require('jsx-view-engine');
require('dotenv').config();
const mongoose = require('mongoose');
const fruits = require('./models/fruits');
const vegetables = require('./models/vegetables');
const Fruit = require('./models/fruit.js');
const Vegetable = require('./models/vegetable.js')

const app = express();
const PORT = 3000;

// App config
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

// middleware
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});
// parse and add the incoming data to a req.body object
app.use(express.urlencoded({extended: false}));





// ============   Routes
app.get('/', (req, res) => {
    res.send('working')
});

/**
 * @path /fruits
 * @method GET
 * @action index
 * @description returns a list of fruits
 */
app.get('/fruits', async (req, res) => {
    // query all fruits from the database 
    const fruitsFromDB = await Fruit.find({});
    console.log(fruitsFromDB)
    res.render('fruits/Index', {
        fruits: fruitsFromDB
    });
});

app.get('/vegetables', async (req, res) => {
    const vegetablesFromDB = await Vegetable.find({}); 
    console.log(vegetablesFromDB)
    res.render('vegetables/Index', {
        vegetables: vegetablesFromDB
    });
});



/**
 * @path /fruits/new
 * @method GET
 * @action create
 * @description show a form to create a new fruit
 */
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New');
});

app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New');
});



/**
 * @path /fruits
 * @method POST
 * @action create
 * @description create a new fruit and re-direct the user
 */
app.post('/fruits',  async(req, res) => {
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    // fruits.push(req.body)
    // console.log(req.body); 

    //create a new fruit in db 
    try{
    
    const createdFruit = await Fruit.create(req.body);
    console.log(createdFruit); 
    res.redirect('/fruits');
    } catch (error) {
        console.log(error);
    }
});

app.post('/vegetables', async(req, res) => {
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }

    //vegetables.push(req.body);
    //console.log(req.body);

    try{
    
    const createdVegetable = await Vegetable.create(req.body); 
    console.log(createdVegetable); 
    res.redirect('/vegetables');
    } catch (error) {
        console.log(error); 
    }
});



/**
 * @path /fruits/indexOfFruitArray
 * @param /:indexOfFruitArray
 * @method GET
 * @action show 
 * @description return a single fruit
 */
app.get('/fruits/:id', async (req, res) => {
    const {id} = req.params;

    const fruit = await Fruit.findById(id);
    console.log('Found FRUIT ->', fruit); 

   res.render('fruits/Show', {
    fruit: fruit
   });
});



app.get('/vegetables/:id', async (req, res) => {
    const {id} = req.params;
    const vegetable = await Vegetable.findById(id);
    console.log('Found VEGETABLE ->', vegetable);

   res.render('vegetables/Show', {
    vegetable: vegetable
   });
});

//Connect to database
mongoose.connect(process.env.MONGO_URI); 
//test connection 
mongoose.connection.once('open', () => {
    console.log('Connected to mongoDB'); 
})


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});