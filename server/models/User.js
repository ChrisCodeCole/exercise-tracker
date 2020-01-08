const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: value => {
            if(!validator.isEmail(value)){
                throw new Error({error: 'Invalid email address'})
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 7
    },
}, {
    timestamps: true
});

// userSchema.pre('save', async function(next){
//     next()
// });

// userSchema.methods.methodName = async function() {
//   
// }

// userSchema.statics.methodName = async () => {
//    
// }

const User = mongoose.model('User', userSchema);

module.exports = User;