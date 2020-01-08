const mongoose = require('mongoose');

const exerciseSchema = mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    reps: [{
        rep: {
            type: Number,
            required: true,
        } 
    }],
    sets: {
        type: Number,
        required: true,
    },
    weight: Number,
    duration: Number,
    date: Date
}, {
    timestamps: true
});

// exerciseSchema.pre('save', async function(next){
//     next()
// });

// exerciseSchema.methods.methodName = async function() {
//   
// }

// exerciseSchema.statics.methodName = async () => {
//    
// }

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;