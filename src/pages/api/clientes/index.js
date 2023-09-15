// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    if(req.method === 'GET'){
      handleGet(req, res)
    }
    else{
      res.status(405).send()
    }
  }
  
  
  function handleGet(req,res){
    res.status(200).json({
      id: 3,
      nome: req.query.nome,
      idade: req.query.idade
    })
  }