import mongoose from "mongoose";

const controleSchema = new mongoose.Schema({
    pessoa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pessoa",
        required: true,
    },

    data: {
        type: Date,
        default: Date.now(),
    },

    horarioEntrada: {
        type: String,
    },

    horarioSaida: {
        type: String,
    },

    status: {
        type: Number,
        required: true,
        default: 1,
    },
});

const Controle = mongoose.model("Controle", controleSchema);

export default Controle;