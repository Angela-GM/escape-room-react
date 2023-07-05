import { useState } from "react";
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import { ToDoForm } from "./ToDoForm";

export interface ToDo {
  id: string,
  text: string,
}

type Props = {
  toDos: Array<ToDo>,
  removeToDo: (id:number) => void,
  updateToDo: (id:string, value:number) => void,
}



export const ToDo = ({ toDos, removeToDo, updateToDo }: Props) => {
  const [ edit, setEdit ] = useState<ToDo | unknown>( { id: '', text: '' } );

  const submitUpdate = (value: number ) => {
    updateToDo(edit.id, value);
    setEdit({
      id: '',
      text: ''
    })
  }

  if (edit.id) {
    return <ToDoForm edit={edit} onSubmit={submitUpdate} />
  }

  return toDos.map((toDo: ToDo, index ) => 
  <div className="toDo-row" key={index}>

    <div key={toDo.id}>
      {toDo.text}
    </div>

    <div className="icons">
      <RiCloseCircleLine onClick={() => removeToDo(toDo.id)} className='delete-icon' />
      <TiEdit onClick={() => setEdit({ id: toDo.id, value: toDo.text })} />
    </div>


  </div>  
  )

}
