const jwt = require('jsonwebtoken');

exports.checkToken = async (req, res, next) => {
    try{
        const result = jwt.verify(req.headers.authorization.split(" ")[1],process.env.JWT_SECRET);
        next();
    }catch (err) {
        res.status(400);
        if (!req.headers.authorization) {
            return res.status(403).json(res.json({
                status: 'failed',
                message: 'No credentials sent! Please login to system'
            }));
        }
        if(err.name === "TokenExpiredError")
        {
            res.json({
                status: 'failed',
                message: 'Your session is expired. Please login for process further.'
            })
            return;
        }
        if(err.name === "JsonWebTokenError")
        {
            res.json({
                status: 'failed',
                message: 'Your session is crushed. Please login for process further.'
            })
            return;
        }
        res.json({
            status: 'failed',
            message: err
        })
    }


}