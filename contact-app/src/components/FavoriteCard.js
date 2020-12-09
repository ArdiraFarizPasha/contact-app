import React from 'react'

function FavoriteCard(props) {
    const { data } = props

    return (
        <div className="card shadow col-4 m-3 align-items-center justify-content-center bg-light rounded">
            <div className="card-body text-center">
                <img className='container mb-3' src={data.data.photo} alt='cover' />
                <div className="card-title">
                    <label>
                        Name:
                    </label>
                    <br />
                    <p>{data.data.firstName} {data.data.lastName}</p>
                    <label>
                        Age:
                    </label>
                    <p>{data.data.age}</p>
                </div>
            </div>
        </div>
    )
}

export default FavoriteCard