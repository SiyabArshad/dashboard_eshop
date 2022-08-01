const initialState={
    user:JSON.parse(localStorage.getItem("eshopuser"))||null
}
export const authreducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case "login_user":
            state.user=action.payload
            localStorage.setItem("eshopuser",JSON.stringify(state.user))  
            return state 
        case "logout_user":
            state.user=null
            localStorage.removeItem("eshopuser")
            return state
        default:
            return state
    }
}