const express = require('express');
const Razorpay = require('razorpay')
const app = express();
const path = require('path');
const router = express.Router();


const razorpay = new Razorpay({
  key_id: 'rzp_test_DG9FZ1jdE564Mb,',
  key_secret: 'CAZUnToazAw5eIm8d879TWTg',

})

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

// app.get('/',(req,res) =>{
//   res.render('razorpay.')
// })

app.post('/order',(re,res) =>{
  let options = {
    amount: 500000,
currency: "INR",

  };

razorpay.orders.create(options, function (err,order){
  console.log(order)
  res.json(order)
})


})

// router.get('/about',function(req,res){
//   res.sendFile(path.join(__dirname+'/about.html'));
// });

// router.get('/sitemap',function(req,res){
//   res.sendFile(path.join(__dirname+'/sitemap.html'));
// });

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');