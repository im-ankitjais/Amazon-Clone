const functions = require("firebase-functions");
const cors= require("cors");
const express = require("express");
const stripe = require("stripe")("sk_test_51HQ5T6EJXCHphdj9wFC3SqmNb3VV5c238ntM0Bw1AC57bZOZyucCkx7awcO1trr11SZMGLXspCw4vG81EBwME7rc00X5Lo0LnC");


// API

// - App config
const app = express();

// - Middlewares
app.use(cors());
app.use(express.json());


// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr"
    }
  );

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
// - Listen command
exports.api = functions.https.onRequest(app);
//http://localhost:5001/clone-be58b/us-central1/api


