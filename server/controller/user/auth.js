require('dotenv').config();
const { user } = require('../../models');
const { isAuthorized } = require('../functions/user')

module.exports = async (req,res)=>{
    if(!req.headers.cookie){
        res.status(401).send({ data: null, message: 'not authorized' });
    }
    const checkedToken = isAuthorized(req);
    const userInfo = await user.findOne({
        where: {user_id : checkedToken.user_id}
    })
    if (!userInfo) {
        return res.json({ success: false, loginId: null, message: '로그아웃 상태입니다' });
    }
    if(userInfo.dataValues.user_id === checkedToken.user_id){
        const payload = {
            user_id : checkedToken.user_id,
            password: checkedToken.password,
            name: checkedToken.name,
            email: checkedToken.email,
            mobile: checkedToken.mobile
        }
        return res.json({ data:{userInfo: payload},success: true, loginId: loginId, message: '로그인 상태입니다' });
    }

}