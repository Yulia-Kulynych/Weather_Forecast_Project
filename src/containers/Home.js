import {useSelector, useDispatch} from "react-redux"
import {selectTodoList} from '../rdx/todoList/selectors'
import {TodoItem} from "../components/TodoItem"
import {removeItem} from '../rdx/todoList/actions'
import './Home.css'
import { useCallback } from "react"

export const Home = ()=>{
    const items = useSelector(selectTodoList);
    const dispatch = useDispatch();
    const onItemDelete = useCallback((id) => {
        dispatch(removeItem(id));
    }, [dispatch])
     return (
        <div className = "Home">
            {items.map((i)=>{
                return <TodoItem key={i.id} task={i} onDelete={onItemDelete}></TodoItem>}
            )}
        </div>
    )
}