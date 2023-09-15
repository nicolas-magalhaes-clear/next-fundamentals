export default function handler(req,res){
    res.status(200).json({
        id: req.query.codigo,
        nome: `Maria ${req.query.codigo}`,
        email: `maria${req.query.codigo}@xcfmail.com`
    })
}