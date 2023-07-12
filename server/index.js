const http = require('http');

const app =  require('./app');
const usersRouter =  require('./routes/users/users.router');
const productsRouter =  require('./routes/products/products.router');

const PORT = process.env.PORT || 8000;  
const server = http.createServer(app)


// server.use('/users', usersRouter)
// server.use('/products', productsRouter)

server.listen(PORT, () => console.log('Server is running at port: ', PORT))
