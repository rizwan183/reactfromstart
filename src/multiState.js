import React ,{useState} from 'react';


function Example1(){
 const [name ,setName] = useState('');
 const [password ,setpassword] = useState('');
 const printValues = e => {
    e.preventDefault();
    console.log(name, password);
  };


  return (
    <form onSubmit={printValues}>
      <label>
        Username:
        <input
          value={name}
          name="username"
          onChange={event=>{
            setName(event.target.value)
          }}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          value={password}
          name="password"
          type="password"
          onChange={event=>{
            setpassword(event.target.value)
          }}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}

export default Example1;
