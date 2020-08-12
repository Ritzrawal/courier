
const mongoose=require("mongoose");
const express=require('express');
const app =express();
const cors = require("cors");
const User=require('./server/models/userModel')
const db =require('./server/models')
const Role = db.role;
const bodyParser=require("body-parser");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const port =3000;
const url="mongodb+srv://ritzrawal:ritzrawal123@courierdata.uxqsi.mongodb.net/newdatabase?retryWrites=true&w=majority"
const pickupRoute=require("./server/routers/pickupRouter");
const sentOrder=require("./server/routers/sentorderRouter")
const userRouter=require("./server/routers/userRouter");
const reportRouter=require("./server/routers/reportRouter")
const orderRoute=require("./server/routers/orderRouter")
const uidata =require('./server/routers/newRouter');
const path = require('path')
require("dotenv").config({
  path: path.join(__dirname, "./server/.env")
});
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
  app.use(async (req, res, next) => {
    if (req.headers["x-access-token"]) {
      try {
        const accessToken = req.headers["x-access-token"];
        const { userId, exp } = await jwt.verify(accessToken, process.env.JWT_SECRET);
        // If token has expired
        if (exp < Date.now().valueOf() / 1000) {
          return res.status(401).json({
            error: "JWT token has expired, please login to obtain a new one"
          });
        }
        res.locals.loggedInUser = await User.findById(userId);
        next();
      } catch (error) {
        next(error);
      }
    } else {
      next();
    }
  });
app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');
app.use( bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
require('./server/routers/auth')(app);
require('./server/routers/user')(app);
app.use('/',orderRoute)
app.use('/',uidata)
app.use('/',sentOrder)
app.use("/",reportRouter)
app.use('/',userRouter)
// app.use('/',userdata)

app.use('/',pickupRoute)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port,()=>{
    console.log(`listening in the port:${port} `)
})