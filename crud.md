# Comandos do mongodb para a apresentação de IO

```bash
db.cidades.insertMany([
  { nome: "São Paulo", estado: "SP" },
  { nome: "Curitiba", estado: "PR" },
  { nome: "Recife", estado: "PE" },
  { nome: "Porto Alegre", estado: "RS" },
  { nome: "Salvador", estado: "BA" }
])
```

```bash
const sp = db.cidades.findOne({ nome: "São Paulo" })._id;
const curitiba = db.cidades.findOne({ nome: "Curitiba" })._id;
const salvador = db.cidades.findOne({ nome: "Salvador" })._id;
```

```bash
db.clientes.insertMany([
  {
    nome: "Ana Clara",
    idade: 22,
    cidadeId: sp
  },
  {
    nome: "Lucas Martins",
    idade: 28,
    cidadeId: sp
  },
  {
    nome: "João Pedro",
    idade: 35,
    cidadeId: curitiba
  },
  {
    nome: "Mariana Souza",
    idade: 27,
    cidadeId: salvador
  },
  {
    nome: "Carlos Henrique",
    idade: 40
    // sem cidadeId
  }
])
```

```bash
db.clientes.aggregate([
  {
    $lookup: {
      from: "cidades",            // Coleção relacionada
      localField: "cidadeId",     // Campo no cliente
      foreignField: "_id",        // Campo na cidade
      as: "cidade"                // Nome do campo de saída
    }
  },
  {
    $unwind: {
      path: "$cidade",
      preserveNullAndEmptyArrays: true // mantém clientes sem cidade
    }
  }
])
```

```bash
db.cidades.aggregate([
  {
    $lookup: {
      from: "clientes",         // coleção a ser juntada
      localField: "_id",        // campo da cidade
      foreignField: "cidadeId", // campo no cliente que referencia a cidade
      as: "clientes"            // nome do array que vai guardar os clientes da cidade
    }
  }
])
```

```bash
db.clientes.updateOne(
  { nome: "Ana Clara" },
  { $set: { idade: 23 } }
)
```

```bash
db.clientes.deleteOne({ nome: "Carlos Henrique" })
```