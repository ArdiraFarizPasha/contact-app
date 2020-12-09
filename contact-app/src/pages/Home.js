import React, { useEffect, useState } from 'react'
import ContactCard from '../components/ContactCard'
import axios from 'axios'
import swal from 'sweetalert'

const Home = () => {
    const [contact, setContact] = useState([])

    useEffect(() => {
        axios({
            url: 'https://simple-contact-crud.herokuapp.com/contact',
            method: 'GET',
        })
            .then(({ data }) => {
                setContact(data.data)
            })
            .catch(err => {
                swal({
                    title: "Oh No! Something is Error!",
                    text: `${err}`,
                    icon: "error",
                  });
            })
    }, [])

    return (
        <section className="container" style={{ width: '100vw' }}>
            <h1>All Contact ({contact.length}) </h1>
            <div className="d-flex flex-wrap justify-content-center">
                {contact.map((data, i) => {
                    return <ContactCard data={data} key={i} />
                })}
            </div>
        </section>
    )
}

export default Home