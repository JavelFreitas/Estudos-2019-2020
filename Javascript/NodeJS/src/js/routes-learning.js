import express from 'express';
const app = express();
const router = express.Router();
const port = 3000;

app.all('/testAll', (req, res) => {
    res.send(req.method);
}); // .all works for all methods (GET, POST, etc...);

app.get('/teste?', (req, res) => {
    res.send('/teste?');
}); // ? makes the previous character optional

app.get('/buzz+', (_, res) => {
    res.send('/buzz+');
}); // + simbolizes that the previous character can be repeated multiple times

app.get('/one*Blue', (_, res) => {
    res.send('/one*Blue');
}); //accepts any string between one and Blue

app.post('/test(ing)?', (_, res) => {
    res.send('/test(ing)?');
}); // the symbol ? works with anything inside the ()

function returnResponse(req, res, next){
    res.send(req.params.id);
}

function modifyParams(req, res, next){
    req.params.id = 'hello';
    next();
}

app.route('/testRoute/:id')
    .get(returnResponse)
    .post([modifyParams, returnResponse])
// the same route can have multiple responses

function testLog(req, res, next){
    console.log('hello');
    res.end();
}

router.get('/', testLog);

app.use('/router', router);


app.listen(port, () => {
    console.log(`App listening onport ${port}`);
}); 