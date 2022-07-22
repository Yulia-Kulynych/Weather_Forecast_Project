import {useCallback, useState, useEffect} from 'react' 
import {useSelector} from "react-redux"
import {useDispatch } from 'react-redux/es/exports'
import {editItem} from '../rdx/todoList/actions'
import {useParams } from 'react-router-dom';
import {selectTodoList} from '../rdx/todoList/selectors'


export const EditItem=()=>{
    const tasks = useSelector(selectTodoList)
    const {id} = useParams()
    const task = tasks.find(element=>element.id ==id)
    
        //const [id, setId] = useState()
    const [name, setName] = useState('')
    const [assignee, setAssignee] = useState('')
   
    useEffect((event)=>{
        if (task&&task.id){
            setName(task.name)
            setAssignee(task.assignee)
        }
    }, [task])


    const dispatch = useDispatch();

    //const onIdChanged = useCallback((event)=>{
    //    setId(event.target.value);
    //}, [setId])

    const onNameChanged = useCallback((event)=>{
        setName(event.target.value);
    }, [setName])

    const onAssigneeChanged = useCallback((event)=>{
        setAssignee(event.target.value);
    }, [setAssignee])

    const onSubmit=useCallback((e)=>{
        e.preventDefault();
        dispatch(editItem({
            id,
            name,
            assignee,
            
        }))

    }, [name, assignee, dispatch ])
    
    return (
    <form onSubmit = {onSubmit}> 
        
        
        
        <div>Name:</div>
        <input value = {name} onChange={onNameChanged}/>
        <br />
        
        <div>Category:</div>
        <input value = {assignee} onChange={onAssigneeChanged} />
        
        <br />
        <input type = {'submit'} value = {'Save'}/>
    </form>
)
}
/*<div>Id:</div>
        <input value = {task.id} onChange={onIdChanged}/>
        <br />*/