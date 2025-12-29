export default function errorHandler(err, req, res, next){
    console.log(err)

    const status = err.statusCode || 500

    res.status(status).json({
        error: err.message || "Internal server error",
    })
}