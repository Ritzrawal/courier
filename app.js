
const mongoose=require("mongoose");
const express=require('express');
const app =express();
const cors = require("cors");
const db =require('./server/models')
const Role = db.role;
const bodyParser=require("body-parser");
const port =3000;
const url="mongodb+srv://ritzrawal:ritzrawal123@courierdata.uxqsi.mongodb.net/newdatabase?retryWrites=true&w=majority"
const studentRoute=require("./server/routers/studentRouter");
const uidata =require('./server/routers/newRouter');

app.use(cors());
mongoose.Promise=global.Promise;
db.mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Database sucessfully connected")
},
error=>{
console.log("could not connect to database :"+error)
}
)
function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'user' to roles collection");
        });
  
        new Role({
          name: "moderator"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'moderator' to roles collection");
        });
  
        new Role({
          name: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'admin' to roles collection");
        });
      }
    });
  }
app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');
app.use( bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
require('./server/routers/auth')(app);
require('./server/routers/user')(app);
// app.use('/',authData)
// app.use('/',userData)
// app.use('/',authdata)
// app.use('/',userdata)

// app.use('/',studentRoute)

app.listen(port,()=>{
    console.log(`listening in the port:${port} `)
})