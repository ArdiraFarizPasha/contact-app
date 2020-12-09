import React from 'react'
import { addFavorite } from '../store/actions/addFavorite'
import { editContact } from '../store/actions/editContact'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import './ContactCard.css'
import axios from 'axios'
import swal from 'sweetalert';

function ContactCard(props) {
    let history = useHistory()

    const { data } = props

    const dispatch = useDispatch()

    const addToFav = () => {
        dispatch(addFavorite(props))
    }

    const contactEdit = (contact) => {
        dispatch(editContact(contact))
        history.push('/editContact')
    }

    const deleteContact = (contact) => {
        axios({
            url: `https://simple-contact-crud.herokuapp.com/contact/` + contact.id,
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            },
        })
            .then(({ data }) => {
                swal({
                    title: "Bye data!",
                    text: "Deleted Successfully",
                    icon: "success",
                  });
            })
            .catch(err => {
                swal({
                    title: "Oh No! Something is Error!",
                    text: `${err}`,
                    icon: "error",
                  });
            })
    }

    const onClickHandler = (id) => {
        history.push(`/contact/${id}`)
    }

    return (
        <div className="wrapper fadeInDown" style={{width:'40vw'}}>
            <div className="d-flex card shadow col-4 m-3 align-items-center justify-content-center bg-light rounded">
                <div className="card-body text-center">
                    <img className='container mb-3' onClick={(e) => onClickHandler(data.id)} src={data.photo} alt='cover' />
                    <div className="card-title">
                        <label>
                            Name:
                    </label>
                        <br />
                        <p>{data.firstName} {data.lastName}</p>
                        <div className="d-flex justify-content-around">
                            <button
                                className="btn btn-outline-dark"
                                onClick={() => { 
                                    addToFav() 
                                    swal({
                                        title: "Nice!",
                                        text: "Success Add Contact To Favorite!",
                                        icon: "success",
                                      });
                                }}
                            >
                                ☆
                        </button>
                            <button
                                className="btn btn-outline-dark"
                                onClick={() => { 
                                    contactEdit(data)
                                }}
                            >
                                ✎
                        </button>
                            <button
                                className="btn btn-outline-dark"
                                onClick={() => { 
                                    deleteContact(data) 
                                }}
                            >
                                ✖
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard