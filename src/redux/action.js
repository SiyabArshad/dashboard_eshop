export const loginaction=(userinfo)=>{
    return{
            type:"login_user"
            ,payload:userinfo
    }
}

export const logoutaction=()=>{
    return{
            type:"logout_user"
    }
}
