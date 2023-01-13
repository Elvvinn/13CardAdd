import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './home.scss'
function HomePage() {

    const [datam, setDatam] = useState([])
    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setDatam(data));

    }, [])

    return (

        <>
            HomePage

            {datam.map((element) => {
                return (
                    <>
                        <Link to={`/product/${element.id}`}>
                            <div className='generaldiv'>
                                <p> {element.id}</p>
                                <img src={element.image} alt='check your internet' />
                                <h4> {element.title}</h4>
                                <h5>{element.category}</h5>
                                <h6>{element.rating.rate}</h6>
                                <h6>{element.rating.count}</h6>
                            </div>
                        </Link>
                    </>
                )
            })}

        </>
    )
}

export default HomePage