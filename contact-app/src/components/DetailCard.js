import React from 'react'

function ContactCard(props) {
    const { data } = props

    return (
        <div className="wrapper fadeInDown" style={{ width: '40vw' }}>
            <div className="card shadow col-4 m-3 align-items-center justify-content-center bg-light rounded">
                <div className="card-body text-center">
                    <img className='container mb-3' src={data.photo} alt='cover' />
                    <div className="card-title">
                        <label>
                            Name:
                    </label>
                        <br />
                        <p>{data.firstName} {data.lastName}</p>
                        <label>
                            Age:
                    </label>
                        <br />
                        <p>{data.age}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard