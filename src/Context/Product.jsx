import React, { useReducer, createContext, useContext } from 'react'

import { FilterReducer } from '../Reducer/Filter.reducer'
import { products } from '../Database/Productlisting'

const ProductContext = createContext()

export const Product = ({ children }) => {
    const [productState, productDispatch] = useReducer(FilterReducer, { products: products })
    return (
        <ProductContext.Provider value={{productState,productDispatch}}>
            {children}
        </ProductContext.Provider>
    )
}

export function useProduct() {
    return useContext(ProductContext)
}
