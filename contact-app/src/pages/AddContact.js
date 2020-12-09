import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert';

const AddContact = () => {
    const [newContact, setNewContact] = useState({firstName: '', lastName: '', age: '',photo: ''})
    const history = useHistory()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios({
            url: 'https://simple-contact-crud.herokuapp.com/contact',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                firstName: newContact.firstName,
                lastName: newContact.lastName,
                age: newContact.age,
                photo: newContact.photo
            }
        })
        .then(({ data }) => {
            swal({
                title: "Great!",
                text: "Added Successfully!",
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
        setNewContact({...newContact, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div className="col">
                <form style={{ padding: 50 }} onSubmit={onSubmitHandler}>
                    <div>
                        <div>
                            <label >First Name</label>
                            <input
                                name="firstName"
                                type="text"
                                className="form-control"
                                id="firstName"
                                placeholder="Enter First Name"
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className="form-group">
                            <label >Last Name</label>
                            <input
                                name="lastName"
                                type="text"
                                className="form-control"
                                id="lastName"
                                placeholder="Enter Last Name"
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className="form-group">
                            <label >Age</label>
                            <input
                                name="age"
                                type="text"
                                className="form-control"
                                id="age"
                                placeholder="Enter Age"
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className="form-group">
                            <label >Photo</label>
                            <input
                                name="photo"
                                type="text"
                                className="form-control"
                                id="photo"
                                placeholder="Enter Photo Link"
                                onChange={onChangeHandler}
                            />
                        </div>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddContact
