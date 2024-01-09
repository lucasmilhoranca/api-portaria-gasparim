import mongoose from "mongoose";
import pessoaService from "../services/pessoa.service.js";
import usuarioService from "../services/usuario.service.js";

export const validId = (req, res, next) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid ID" });
    }

    next();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const validUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    const user = await pessoaService.findByIdPessoaService(id);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    req.id = id;
    req.user = user;

    next();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const validUsuario = async (req, res, next) => {
  try {
    const id = req.params.id;

    const user = await usuarioService.findByIdUsuariosService(id);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    req.id = id;
    req.user = user;

    next();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}
export const validCpf = (req, res, next) => {
  try {
    const { cpf } = req.body;

    if (!IsValidCPF(cpf)) {
      return res.status(400).send({ message: "CPF is not valid" });
    }

    next();

  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

const IsValidCPF = (cpf) => {

  const cpfLimpo = cpf.replace(/[^\d]/g, '');
  const digitosIguais = /^(.)\1+$/g.test(cpfLimpo);

  if (cpfLimpo.length !== 11 || digitosIguais) {
    return false;
  }

  const cpfArray = cpfLimpo.split('').map(Number);

  const calcularDigito = (sliceCpf) => {
    const soma = sliceCpf.reduce((acc, value, index) => acc + value * (sliceCpf.length + 1 - index), 0);
    const resto = (soma * 10) % 11;
    return resto === 10 || resto === 11 ? 0 : resto;
  };

  const primeiroDigito = calcularDigito(cpfArray.slice(0, 9));
  const segundoDigito = calcularDigito(cpfArray.slice(0, 10));

  if (primeiroDigito !== cpfArray[9] || segundoDigito !== cpfArray[10]) {
    return false;
  }

  return true;

}