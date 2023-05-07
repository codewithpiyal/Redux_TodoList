const InitialState={
    Input_Data:[]
}


export const reducersfile=(state=InitialState,action)=>{
    switch (action.type){
        case "Add_Data": return {
            ...state,
            Input_Data:[...state.Input_Data,action.payload]
        }
        default: return state
    }
}