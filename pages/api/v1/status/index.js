function status(req, res) {
  res.status(200).json({ chave: "Alunos do curso.dev são demais!" });
}

export default status;
