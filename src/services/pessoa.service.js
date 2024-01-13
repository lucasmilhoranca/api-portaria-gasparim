import pessoaRepository from "../repositorys/pessoa.repository.js";
import { createClient } from "redis";

const clientRedis = createClient();

clientRedis.connect();

const findAllPessoasService = async () => {
        const pessoasFromCache = await clientRedis.get('getAllPessoas');

        if (pessoasFromCache) return pessoasFromCache;

        const pessoas = await pessoaRepository.findAllPessoasRepository();
        await clientRedis.set("getAllPessoas", JSON.stringify(pessoas));


        if (pessoas.length === 0) throw new Error("There are not registred users");

        // console.log("N peguei do cache");
        return pessoas;
}

const findByIdPessoaService = async (id) => {
    
        const pessoa = await pessoaRepository.findByIdPessoaRepositoryP(id);
         
        if(!pessoa) throw new Error("User not found")

        return pessoa
}

const findByCpfPessoaService = async (cpf) => {

        const pessoa = await pessoaRepository.findByCpfPessoaRepository(cpf);

        if(!pessoa) throw new Error("User not found");

        return pessoa;
}

const deltePessoaService = async (id) => {

        const pessoa = await pessoaRepository.deletePessoaRepository(id);

        if(!pessoa) throw new Error("User was not deleted");

        await clientRedis.del(`getAllPessoas`);

        return { message: "User succesfully delete" };
}

export default { findAllPessoasService, findByIdPessoaService, findByCpfPessoaService, deltePessoaService };