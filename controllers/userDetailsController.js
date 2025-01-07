import express from "express";
const router = express.Router();
import Sequelize from "sequelize";
import UserDetails from "../models/UserDetails.js";

// get all users
router.get("/", async (req, res) => {
    UserDetails.findAll({
        where: {
            score: { [Sequelize.Op.ne]: null }
        },
        order: [['score', 'DESC']]
    })
    .then(userData => {
        res.json(userData);
    }).catch(err => {
        res.status(500).json({msg: "error", err})
    });
});

// get by id
router.get('/:id', async (req, res) => {
    UserDetails.findByPk(req.params.id)
    .then(userData => {
        if(!userData) {
            return res.status(404).json({msg: "no such user"})
        }

        res.status(200).json(userData);
    }).catch(err => {
        res.status(500).json({msg: "error", err})
    });
});

// add a user
router.post('/', async (req, res) => {
    UserDetails.create(req.body)
    .then(userData => {
        res.json(userData);
    }).catch(err => {
        res.status(500).json({msg: "error", err})
    });
});

// update a user's score
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { score } = req.body;

    try {
        const userData = await UserDetails.findByPk(id);
        
        if (!userData) {
            return res.status(404).json({ msg: "no such user" });
        }

        const currentScore = userData.score;
        const newScore = currentScore === null ? score : Math.max(currentScore, score);

        await userData.update({ score: newScore });
        
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json({ msg: "error", err });
    }
});

// delete a user
router.delete('/:id', async (req, res) => {
    try {
        const userData = await UserDetails.findByPk(req.params.id);
        
        if (!userData) {
            return res.status(404).json({ msg: "no such user" });
        }

        await userData.destroy();
        
        res.status(200).json({ msg: "user successfully deleted" });
    } catch (err) {
        res.status(500).json({ msg: "error", err });
    }
});

export default router;