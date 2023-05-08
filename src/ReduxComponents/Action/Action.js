export const Add=(items)=>{
    return {
        type: "Add_Data",
        payload:items
    }
}
export const Remove=(id)=>{
    return {
        type: "RMV_Data",
        payload:id
    }
}