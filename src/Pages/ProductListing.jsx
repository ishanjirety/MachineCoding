import React from 'react'
import './Page.css'
import { Card,Filter } from '../Components'
import { useProduct } from '../Context/Product'

export const ProductListing = () => {
    const { productState } = useProduct()
    console.log(productState)
    return (
        <div className="page">
            <div className="filter-wrapper">
                <Filter/>
            </div>
            <div className="card-wrapper">
                {productState.products.map((item) => {
                    return <Card data={item} key={item.id}/>
                })}
            </div>
        </div>
    )
}
