const app = require('./app');
const path = require('path');
const fs = require('fs');

try {
  const data = fs.readFileSync('file.txt', 'utf8');
  console.log(data);
} catch (err) {
  if (err.code === 'ENOENT') {
    console.error('File not found:', err.path);
  } else {
    console.error(err);
  }
}


const connectDatabase = require('./config/database');



connectDatabase();

const server = app.listen(process.env.PORT,()=>{
    console.log(`My Server listening to the port: ${process.env.PORT} in  ${process.env.NODE_ENV} `)
})

process.on('unhandledRejection',(err)=>{
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to unhandled rejection error');
    server.close(()=>{
        process.exit(1);
    })
})

process.on('uncaughtException',(err)=>{
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to uncaught exception error');
    server.close(()=>{
        process.exit(1);
    })
})



