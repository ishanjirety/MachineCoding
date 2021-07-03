import {products} from '../Database/Productlisting.js'
export function FilterReducer(state, { type, payload }) {
    
    switch (type) {
        case "HIGH-TO-LOW":
            console.log(state.products.sort((a,b) => b.sellingPrice - a.sellingPrice))
            return {products:state.products.sort((a,b) => b.sellingPrice - a.sellingPrice)}
        case "LOW-TO-HIGH":
            return {products:state.products.sort((a,b) => a.sellingPrice - b.sellingPrice)}
        case "SORT-BY-BRAND":
            return {products:state.products.filter((item)=> item.brand === payload)}
        case "SORT-BY-SIZE":
            return {products:state.products.filter((item)=> item.size === payload)}
        case "SORT-BY-GENDER":
            return {products:state.products.filter((item)=> item.gender !== payload)}
        case "RESET":
            return {products:products}
        default:
            break;
    }

}