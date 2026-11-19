const notFound  = (req,res,next) =>{
        res.status(400).json({
            sucess:false,
            message:`route not found ${req.originalUrl}`
        })
}

export default notFound;