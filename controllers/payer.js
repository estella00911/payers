const db = require('../models')
const payerModel = require('../models/payer')

const Payer = db.Payer

const payersController = {
    index: ((req, res)=> {
        res.render('index');
    }),
    add: (req, res) => {
        const { payer, points, timestamp } = req.body;
        const existPayer = Payer.findOne({
            where: {
                payer
            }
        })
       if (existPayer === null) {
            Payer.create({
                payer,
                points,
                timestamp
            }).then(() => {
                res.sendStatus(200); // Use sendStatus to send a status code without a response body
                res.redirect('/');
            }).catch(error => {
                console.error(error);
                res.status(500).send('Internal Server Error');
            });
       } else {
        Payer.update({
            points: points
        }, {
            where: {
            payer
            }
        })
       }
        
    },
    spend: (req, res) => {
        const { points } = req.body;
        try {
            // Find the oldest point by timestamp
            Payer.findOne({
              order: [['timestamp', 'DESC']],
            }).then(oldestPoint => {
                if (oldestPoint.points >= points) {
                    var newPoints = oldestPoint.points - points;
                    oldestPoint.update({
                        points: newPoints
                    }).then(()=> {
                        res.sendStatus(200);
                        res.redirect('/');
                    }).catch(error => {
                        console.error(error);
                        res.status(500).send('Internal Server Error');
                    });
                } else {
                    res.status(400).send('the user doesn’t have enough points');
                }
            })
        } catch (error) {

            console.error('Error:', error);
        }
    },
    balance: (req, res) => {
        Payer.findAll().then(payers => {
            res.render('balance', {payers});
        })
    }
}

module.exports = payersController;