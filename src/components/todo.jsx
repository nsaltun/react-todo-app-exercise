import React, { useState } from 'react'
const Todo = () => {

  const [inputTitle, setinputTitle] = useState("");
  const [inputDesc, setinputDesc] = useState("");
  const [items, setitems] = useState([
    {
      id: "001",
      name: "Default Task",
      desc: "Default Description",
      status: false,
    },
  ]);

  const handleInputTitle = (e) => {
    setinputTitle(e.target.value);
  };
  const handleInputDesc = (e) => {
    setinputDesc(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputTitle || !inputDesc) {
      alert("fill data");
    }
    else {
      const allinputTitle = {
        id: new Date().getTime().toString(),
        name: inputTitle,
        desc: inputDesc,
      };
      setitems([allinputTitle, ...items]);
      console.log(items)
    }
  }

  const handleRemoveAll = () => {
    setitems([])
  }

  const handleEdit = ()=>{
    
  }

  const showDelete = ()=>{
    
  }

  const handleDelete = ()=>{
    
  }

  const handleAdd = () => {

  }

  return (
    <div>
      <h2>Todo Component</h2>
      <div className="container">
        <div className="col-12 text-end">
          <button className="btn btn-primary " onClick={handleAdd}>
            Add New Task
          </button>
          <button className="btn btn-primary " onClick={handleRemoveAll}>
            Remove All Tasks
          </button>
        </div>
      </div>
      <div className="container border rounded d-flex justify-content-center shadow p-3 mb-5 bg-white rounded">
        <div className="row">
          <div className="text-center">
            <h2></h2>
          </div>
          <form className="col-12 p-2" onSubmit={handleSubmit} >
            <label htmlFor="title" className="my-2">
              Enter Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="title"
              className="w-100 my-1 p-2"
              onChange={handleInputTitle}
              value={inputTitle}
            />
            <label className="my-2" htmlFor="description">
              Enter
            </label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Description"
              className="w-100 my-1 p-2"
              onChange={handleInputDesc}
              value={inputDesc}
            />
            <button className="btn btn-primary my-2">Save</button>
          </form>
          <div className="container py-2 ">
            {items.map((elem, index) => {
              return (
                <div className="row border rounded shadow p-3 mb-5 bg-white rounded my-3 p-2" key={elem.id}>
                  <div className="col-12 d-flex justify-content-between">
                    <div>
                      <h4>{elem.name}</h4>
                      <p>{elem.desc}</p>
                      {/* <h6>description</h6> */}
                    </div>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-primary mx-2"
                        onClick={() => handleEdit(elem.id)}
                      >
                        Edit
                      </button>

                      {showDelete ? (
                        <button
                          className="btn btn-danger mx-2"
                          onClick={() => handleDelete(elem.id)}
                        >
                          Delete
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>)
            })}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Todo