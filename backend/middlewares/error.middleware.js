const errorHandler = (err,req,res,next) =>{
    if(res.headersSent){
        return next(err)
    }

    const statusCode = err.statusCode || err.status || 500;
    res.status(statusCode).json({
        success:false,
        message:statusCode == 500 ? "Interal Server Error" : err.message
    })
}

export default errorHandler;