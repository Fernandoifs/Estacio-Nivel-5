const banco = require("mongoose");
const url = "localhost:27017/livraria";
mongodb://localhost:27017/

options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

banco.connect(url, options)
  .then(() => {
    console.log("Conectado com sucesso!");
  })
  .catch((err) => {
    console.error("Erro ao conectar:", err);
  });

module.exports = { banco, options };
