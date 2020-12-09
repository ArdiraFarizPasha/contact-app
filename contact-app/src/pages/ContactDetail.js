import React, { useEffect, useState } from 'react'
import DetailCard from '../components/DetailCard'
import axios from 'axios'
import swal from 'sweetalert'

const ContactDetail = (props) => {
    const [contact, setContact] = useState([])

    useEffect(() => {
        const id = props.match.params.id

        axios({
            url: 'https://simple-contact-crud.herokuapp.com/contact/' + id,
            method: 'GET',
        })
            .then(({ data }) => {
                setContact([data.data])
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
        <section className="container" style={{width:'100vw'}}>
            <h1>Detail Contact </h1>
            <div className="d-flex flex-wrap justify-content-center">
                {contact.map((data, i) => {
                    return <DetailCard data={data} key={i} />
                })}
            </div>
        </section>
    )
}

export default ContactDetail