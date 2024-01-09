import mongoose from "mongoose";
import bcrypt from "bcrypt";

//schema usuario
const usuarioSchema = new mongoose.Schema({
    usuario: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        select: false
    }
}, { collection: 'usuarios' });

//criptografia bcrypt
usuarioSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

export default Usuario;