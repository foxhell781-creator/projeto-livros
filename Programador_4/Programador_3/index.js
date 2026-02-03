const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

const products = [
    { id: 1,
    title: "Livro",
    price: 12.99
    },
    { id: 2,
    title: "Caneca",
    price: 49.99
    },
    { id: 3,
    title: "Camisa",
    price: 59.99
    }
]

app.get('/', (req,res)=>{
        res.render('home', {products})
})

app.get('/product/:id', (req, res)=>{
    const product = products[parseInt(req.params.id)-1]
    res.render('product', {product})
})

app.listen(port, ()=>{
    console.log(`O servidor está rodando na porta ${port}`)
})