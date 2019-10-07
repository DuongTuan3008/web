import express, { static } from 'express';
import { json } from 'body-parser';
import { connect, Schema, model } from 'mongoose';
connect('mongodb://ngocpham:fullstack28@ds227808.mlab.com:27808/web-28');

var app = express();
const port = process.env.PORT || 3000;

const PlayerSchema = Schema({
    name: {
        type: String,
        required: true
    }
});

const PlayerModel = model('player', PlayerSchema);

app.use(json());
app.use('/', static(__dirname + '/'));

app.post('/player', function (request, response) {
    const input = request.body;
    if (!input.name) {
        response.json({
            code: 0,
            err: 'Missing input!'
        });
    } else {
        let newPlayer = new PlayerModel({
            name: input.name
        });
        newPlayer.save(function (err, data) {
            if (err) {
                response.json({
                    code: 0,
                    err: err
                });
            } else {
                response.json({
                    code: 1,
                    data: data,
                });
            }
        })
    }
})

app.get('/player/:id', function (request, response) {
    const input = request.params.id;
    PlayerModel.find(input).exec(function (err, data) {
        if (err) {
            response.json({
                code: 0,
                err: err
            });
        } else {
            response.json({
                code: 1,
                data: data,
            });
        }
    })
})

app.put('/player/:id', function (req, res) {
    const id = req.params.id;
    const input = req.body;
    if (!input.name) {
        res.json({
            code: 0,
            err: "Missing input"
        });
    } else {
        PlayerModel.updateOne({ _id: id }, { $set: input }).exec(function (err, data) {
            if (err) {
                res.json({
                    code: 0,
                    err: err
                });
            } else {
                res.json({
                    code: 1,
                    data: data,
                });
            }
        })
    }
})

app.delete('/player/:id', function (req, res) {
    const id = req.params.id;
    PlayerModel.deleteOne({ _id: id }).exec(function (err, data) {
        if (err) {
            res.json({
                code: 0,
                err: err
            });
        } else {
            res.json({
                code: 1,
                data: data,
            });
        }
    })
})

const server = app.listen(port, function () {
    console.log(`Server run at localhost:${port}`);
})