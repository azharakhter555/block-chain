var express = require('express');
var router = express.Router();
const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545'); // Replace with your own Ethereum node URL


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('profile', { title: 'Profile', body: 'Your page content' });
});


/* POST to buy NFTs */
router.post('/buy', async function(req, res, next) {
  try {
    // Retrieve parameters from the request
    const { from, quantity } = req.body;

    // Perform the transaction to buy NFTs
    const accounts = await web3.eth.getAccounts();
    const transaction = await contract.methods.buyNFTs(quantity).send({ from: from, gas: 3000000 });
    
    // Transaction successful
    res.send('NFTs purchased successfully!');
  } catch (error) {
    // Transaction failed
    console.error('Error buying NFTs:', error);
    res.status(500).send('Error buying NFTs');
  }
});


module.exports = router;
