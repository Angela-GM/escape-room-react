import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuid } from 'uuid';
import { ToDo } from './ToDo';
type Props = {
    edit: any,
    onSubmit: (toDo:ToDo) => void
};
export const ToDoForm = ( props: Props ) => {
    const [ input, setInput ]= useState<string>(props.edit ? props.edit.value : '');
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSubmit(
            {
                id: uuid(),
                text: input,
            }
        )
        setInput('');

    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    


  return (
    <form onSubmit={handleSubmit} className='toDo-form' aria-labelledby='toDo-form' >

        {props.edit ? (<>
        
            <input onChange={handleChange} type="text"  placeholder='Update your item' value={input} name='text' className='toDo-input edit' />
            <button type='submit' className='toDo-button edit'>Update</button>
            </>

        ): (
            <>
            <input onChange={handleChange} type="text"  placeholder='Add a to do' value={input} name='text' className='toDo-input' />
            <button type='submit' className='toDo-button'>Add something to do</button>
            
            </>


        )}
        



    </form>
    
  )
}

