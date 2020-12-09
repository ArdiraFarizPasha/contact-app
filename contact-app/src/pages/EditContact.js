import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert';

const EditContact = () => {
    const [editedData, setEditedData] = useState({})

    const { contact } = useSelector(state => state)

    const history = useHistory()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios({
            url: `https://simple-contact-crud.herokuapp.com/contact/` + contact.id,
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                firstName: editedData.firstName,
                lastName: editedData.lastName,
                age: editedData.age,
                photo: editedData.photo
            }
        })
            .then(({ data }) => {
                console.log(data, "<<<<< from EDIT");
                swal({
                    title: "Yey!",
                    text: "Edited Successfully!",
                    icon: "success",
                  });
                history.push('/')
            })
            .catch(err => {
                swal({
                    title: "Oh No! Something is Error!",
                    text: `${err}`,
                    icon: "error",
                  });
            })
    }

    const onChangeHandler = (e) => {
        e.preventDefault()
        setEditedData({...editedData, [e.target.name] : e.target.value})
    }

    return (
        <div className="col">
            <form style={{ padding: 50 }} onSubmit={e => onSubmitHandler(e)}>
                <div>
                    <div>
                        <label >First Name</label>
                        <input
                            name="firstName"
                            type="text"
                            className="form-control"
                            id="firstName"
                            defaultValue={contact.firstName}
                            placeholder="Enter First Name"
                            onChange={e => onChangeHandler(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label >Last Name</label>
                        <input
                            name="lastName"
                            type="text"
                            className="form-control"
                            id="lastName"
                            defaultValue={contact.lastName}
                            placeholder="Enter Last Name"
                            onChange={e => onChangeHandler(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label >Age</label>
                        <input
                            name="age"
                            type="text"
                            className="form-control"
                            id="age" 
                            defaultValue={contact.age}
                            placeholder="Enter Age"
                            onChange={e => onChangeHandler(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label >Photo</label>
                        <input
                            name="photo" 
                            type="text"
                            className="form-control"
                            id="photo" 
                            defaultValue={contact.photo}
                            placeholder="Enter Photo Link"
                            onChange={e => onChangeHandler(e)}
                        />
                    </div>
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default EditContact
