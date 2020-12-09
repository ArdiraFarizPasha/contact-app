import React from 'react'
import { useSelector } from 'react-redux'
import FavoriteCard from '../components/FavoriteCard'

const Favorite = () => {
    const { favorite } = useSelector(state => state)

    return (
        <section className="container">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <h1>All Favorite Contact ({favorite.length}) </h1>
                        <div className="d-flex justify-content-center">
                            {favorite.map((datum, i) => {
                                return <FavoriteCard data={datum} key={i} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Favorite