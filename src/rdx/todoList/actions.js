export const ADD_NEW_ITEM = "ADD_NEW_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const FILTERED_ITEM = "FILTERED_ITEM";

export const addNewItem = ({name, assignee, show})=>{
    return{
        type: ADD_NEW_ITEM,
        payload: {
            name,
            assignee,
            show,            
        }
    }
}
export const editItem = ({name, assignee, id, show})=>{
    return{
        type: EDIT_ITEM,
        payload: {
            name,
            assignee,
            id,
            show
            
        }
    }
}
export const filteredItem = (assignee)=>{
    return{
        type: FILTERED_ITEM,
        payload: {
          
            assignee,
          
         
        }
    }
}

export const removeItem = (id) =>{
    return {
        type: REMOVE_ITEM,
        payload: id,
    }
}