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

export const Update=(items,id)=>{
    return {
        type: "Update_Data",
        payload:items,
        val:id
    }
}