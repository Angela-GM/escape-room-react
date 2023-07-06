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
  removeToDo: (id:string) => void,
  updateToDo: (id:string, value:any) => void
}



export const ToDo = ({ toDos, removeToDo, updateToDo }: Props) => {
  const [ edit, setEdit ] = useState<ToDo | any>( { id: null, value: '' } );

  const submitUpdate = (value: any ) => {
    updateToDo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
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
