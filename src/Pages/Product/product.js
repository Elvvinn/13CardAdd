import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


function ProductPage() {

    let { id } = useParams();

    const [datam, setDatam] = useState({})
    useEffect(() => {

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => setDatam(data));

    }, [])


    return (

        <>
            HomePage

            <div className='generaldiv'>
                <p> {datam.id}</p>
                <img src={datam.image} alt='check your internet' />
                <h4> {datam.title}</h4>
                <h5>{datam.category}</h5>
            </div>
            <Link to={"/"}> <button>GO BACK</button> </Link>
        </>
    )
}

export default ProductPage