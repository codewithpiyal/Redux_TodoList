const InitialState={
    Input_Data:[]
}


export const reducersfile=(state=InitialState,action)=>{
    switch (action.type){
        case "Add_Data": return {
            ...state,
            Input_Data:[...state.Input_Data,action.payload]
        }
        case "RMV_Data": 
            const dlt= state.Input_Data.filter((cElem,i)=> i!==action.payload)
            return {
                ...state,
                Input_Data:dlt
            }
        
        default: return state
    }
}