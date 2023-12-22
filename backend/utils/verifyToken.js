import jwt from 'jsonwebtoken'
export const verifyToken = (req, res, next) =>{
    const token = req.cookies.accessToken

    if(!token){
        return res.status(401).json({success: false, message: "You're not authorized"})
    }

    jwt.verify(token, "gahg48589a45ajfjAUFAHHFIhufuu", (err, user) => {
        if(err){
            return res.status(401).json({success: false, message: "token is invalid"})
            
        }
        req.user = user
        next()
    })
}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, ()=> {
        if(req.user.id === req.params.id || req.user.role==="admin"){
            next()
        }else{
            return res.status(401).json({success: false, message: "Your're not authenticated"})
        }
    })
}

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, ()=> {
        if(req.user.role==="admin"){
            next()
        }else{
            return res.status(401).json({success: false, message: "Your're not authorized"})
        }
    })
}