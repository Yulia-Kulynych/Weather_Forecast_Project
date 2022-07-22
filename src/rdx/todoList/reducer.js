import {ADD_NEW_ITEM, REMOVE_ITEM, EDIT_ITEM} from './actions'

const initialState = {
    tasks:[
        {
          id: '1',
          name: 'Milk',
          assignee: "Milk_products"
        },
        {
            id: '2',
            name: 'Cheese',
            assignee: "Milk_products"
        },
        {
            id: '3',
            name: 'Orange',
            assignee: "Fruits"
        },
        {
            id: '4',
            name: 'Juice',
            assignee: "Drinks"
        },
        {
            id: '5',
            name: 'Wine',
            assignee: "Drinks"
        },


    ],
    nextId:6,
}


export const todolistReducer = (state=initialState, action)=>{
    switch (action.type){
        case ADD_NEW_ITEM:{
            return {
                ...state,
                tasks:[
                    ...state.tasks,
                     {...action.payload, id: state.nextId}//новий елемент
                ],
                nextId:state.nextId + 1,//id якого розраховуємо
            }
        }
        case EDIT_ITEM:{
            return {
                ...state,
                tasks: 
                    
                    state.tasks.map((i)=> {
                    if (i.id ==action.payload.id){
                   return action.payload
                    }
                    else {
                        return i 
                    }})
                
                
            }
        }
        case REMOVE_ITEM:{
            return {
                ...state,
                tasks: state.tasks.filter((i)=> i.id !==action.payload)//що змінюється в tasks
            }
        
        }
        default: {
            return state;
        }
    }
    
}