import {useState, useEffect} from 'react'

function Form({addContacts, contacts}) {

  const [form, setForm] = useState({todo:""})
  const onChangeInput = (e)=>{
    setForm({...form, [e.target.name]: e.target.value})
  }

  const onSubmit =()=>{
    if(form.todo ==="")
      return false  
    addContacts([...contacts,form]) //add

    setForm({todo: ""})
  }
  return (
    <div className='form'>
      <input value={form.todo} name='todo' placeholder='Enter the todo' onChange={onChangeInput}/>
      <button onClick={onSubmit}>Add</button>
    </div>
  )
}

export default Form
