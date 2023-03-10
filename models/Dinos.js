const mongoose = require('mongoose');

const dinoSchema = new mongoose.Schema({
    id: Number,
    name: { type: String, required: true },
    nameMeaning: { type: String, required: true },
    type: { 
        type: [String], 
        enum: {
        values: ["Herbívoro", "Carnívoro", "Omnívoro"],
        message: "Este no es un tipo válido."
               },
        lowercase: true
            },
    weight: { type: String, required: true },
    length: { type: String, required: true },
    height: { type: String, required: true },
    historicalPeriod: { type: String, required: true },
    picture: { type: String },
    foundIn: { type: [String]},
    diet: { type: String },
    characteristics: { type: String, required: true },
    locomotion: { 
        type: [String], 
        enum: {
        values: ["Cuadrúpedo", "Bípedo", "Aéreo"],
        message: "Esta no es una forma de locomoción válida."
               },
        lowercase: true
            },
    habitat: { type: String},
    facts: { type: [String]},
    favoriteCount : Number
  
}, {
    timestamps: true
}
);

const Dino = mongoose.model('Dinosaur', dinoSchema);

module.exports = Dino;

    