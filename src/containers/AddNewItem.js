import {useCallback, useState} from 'react' 
import {useDispatch } from 'react-redux/es/exports'
import {addNewItem } from '../rdx/todoList/actions'

export const AddNewItem=()=>{
    const [name, setName] = useState('')
    const [assignee, setAssignee] = useState('')

    const dispatch = useDispatch();

    const onNameChanged = useCallback((event)=>{
        setName(event.target.value);
    }, [setName])

    const onAssigneeChanged = useCallback((event)=>{
        setAssignee(event.target.value);
    }, [setAssignee])

    const onSubmit=useCallback((e)=>{
        e.preventDefault();
        dispatch(addNewItem({
            name,
            assignee 
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
