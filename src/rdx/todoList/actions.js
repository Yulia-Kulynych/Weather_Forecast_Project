export const ADD_NEW_ITEM = "ADD_NEW_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";

export const addNewItem = ({name, assignee})=>{
    return{
        type: ADD_NEW_ITEM,
        payload: {
            name,
            assignee,
            
        }
    }
}
export const editItem = ({name, assignee, id})=>{
    return{
        type: EDIT_ITEM,
        payload: {
            name,
            assignee,
            id,
            
        }
    }
}

export const removeItem = (id) =>{
    return {
        type: REMOVE_ITEM,
        payload: id,
    }
}