const Goal = require('../models/goal_model');
const asyncHandler = require('express-async-handler')

exports.createGoal = asyncHandler(async (req, res) => {
    const { goalDescription, targetAmount, deadline } = req.body;
    const newGoal = await Goal.create({
        goalDescription,
        targetAmount,
        deadline,
        user: req.user._id
    })

    res.status(201).json({ message: 'Goal created successfully', newGoal });

});


exports.getGoals = asyncHandler(async (req, res) => {

    const goals = await Goal.find({ user: req.user._id });
    res.status(200).json({ success: true, goals });

});


exports.updateGoal = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { goalDescription, targetAmount, deadline } = req.body;

    const goal = await Goal.findOneAndUpdate(
        { _id: id, user: req.user._id },
        { goalDescription, targetAmount, deadline },
        { new: true, runValidators: true }
    );
    if (!goal) {
        return res.status(404).json({ success: false, message: 'Goal not found' });
    }
    res.status(200).json({ success: true, message: 'Goal updated successfully', goal });

});
