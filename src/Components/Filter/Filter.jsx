import React, { useState } from 'react'
import { useProduct } from '../../Context/Product'
import './Filter.css'

export const Filter = () => {
    const [priceFilter, setPriceFilter] = useState({
        high:false,
        low:false,
    })
    const [brandFilter,setBrandFilter] = useState({
        allenSolly:false,
        beingHuman:false,
        peterEngland:false,
        libas:false
    })
    const [sizeFilter,setSizeFilter] = useState({
        s:false,
        m:false,
        xl:false
    })
    const [genderFilter,setGenderFilter] = useState({
        m:false,
        f:false
    })

    const { productState, productDispatch } = useProduct()
    function filterAction(action){
        if(action === "HIGH-TO-LOW"){
            productDispatch({ type: "HIGH-TO-LOW" })
            setPriceFilter(()=>{return {low:false,high:true}})
        }else{
            productDispatch({ type: "LOW-TO-HIGH" })
            setPriceFilter(false)
            setPriceFilter((filter)=>{return {low:true,high:false}})
        }
    }
    function brandFilterAction(action){
        if(action === "Peter England"){
            productDispatch({ type: "RESET" })
            productDispatch({ type: "SORT-BY-BRAND",payload:"Peter England" })
            setBrandFilter(()=>{
                return { allenSolly:false,
                beingHuman:false,
                peterEngland:true,
                libas:false
            }
            })
     
        }else if(action === "Being human"){
            productDispatch({ type: "RESET" })
            productDispatch({ type: "SORT-BY-BRAND",payload:"Being human" })
            setBrandFilter(()=>{
                return { allenSolly:false,
                beingHuman:true,
                peterEngland:false,
                libas:false}
            })
        }
        else if(action ==="LIBAS"){
            productDispatch({ type: "RESET" })
            productDispatch({ type: "SORT-BY-BRAND",payload:"LIBAS" })
            setBrandFilter(()=>{
                return { allenSolly:false,
                beingHuman:false,
                peterEngland:false,
                libas:true}
            })
        }
        else{
            productDispatch({ type: "RESET" })
            productDispatch({ type: "SORT-BY-BRAND",payload:"Allen Solly" })
            setBrandFilter(()=>{
                return { allenSolly:true,
                beingHuman:false,
                peterEngland:false,
                libas:false}
            })
        }
    }
    function genderFilterAction(action){
        if(action === "M"){
            productDispatch({ type: "RESET" })
            productDispatch({ type: "SORT-BY-GENDER",payload:"Male" })
            setGenderFilter((filter)=>{return {m:true,f:false}})
        }else{
            productDispatch({ type: "RESET" })
            productDispatch({ type: "SORT-BY-GENDER",payload:"Female" })
            setGenderFilter((filter)=>{return {m:false,f:true}})
        }
    }


    function sizeFilterAction(action){
        if(action === "M"){
            productDispatch({ type: "RESET" })
            productDispatch({ type: "SORT-BY-SIZE",payload:"m" })
            setSizeFilter(()=>{return {m:true,s:false,xl:false}})
        }else if(action === "S"){
            productDispatch({ type: "RESET" })
            productDispatch({ type: "SORT-BY-SIZE",payload:"s" })
            setSizeFilter(()=>{return {m:false,s:true,xl:false}})
        }
        else{
            productDispatch({ type: "RESET" })
            productDispatch({ type: "SORT-BY-SIZE",payload:"xl" })
            setSizeFilter(()=>{return {m:false,s:false,xl:true}})
        }
    }


    function clearFilter(){
        setPriceFilter({
            high:false,
            low:false
        })
        setBrandFilter({
            allenSolly:false,
            beingHuman:false,
            peterEngland:false
        })
        setGenderFilter({
            m:false,
            s:false,
        })
        setSizeFilter({
            s:false,
            xl:false,
            m:false,
        })
        productDispatch({type:"RESET"})
    }
    return (
        <div className="filter">
            <button onClick={clearFilter}>Clear Filter</button>
                <h2>Price Filter</h2>
            <div className="price-filter">
               <span><label for="HIGH">High to low</label> <input type="radio" id="HIGH" onChange={() =>filterAction("HIGH-TO-LOW") } checked={priceFilter.high} name="" id="" /></span>
               <span><label for="LOW">low to High</label> <input type="radio" id="LOW" onChange={() => filterAction("LOW-TO-HIGH")}  checked={priceFilter.low} name="" id="" /></span>
            </div>
                <h2>Brand Filter</h2>
            <div className="brand">
                <span><label for="AS">Allen Solly</label><input type="radio" id="AS" onChange={()=>brandFilterAction("Allen Solly")} checked = {brandFilter.allenSolly} name="" id="" /></span>
                <span><label for="BH">Being human</label><input type="radio" id="BH" onChange={()=>brandFilterAction("Being human")} checked = {brandFilter.beingHuman} name="" id="" /></span>
                <span><label for="PE">Peter England</label><input type="radio" id="PE" onChange={()=>brandFilterAction("Peter England")} checked = {brandFilter.peterEngland} name="" id="" /></span>
                <span><label for="LB">LIBAS</label><input type="radio" id="LB" onChange={()=>brandFilterAction("LIBAS")} checked = {brandFilter.libas} name="" id="" /></span>
            </div>
                <h2>Gender Filter</h2>
            <div className="gender">
                <span><label for="M">Female</label><input type="radio" id="M" onChange={()=>genderFilterAction("M")} checked={genderFilter.m} name="" id="" /></span>
                <span><label for="F">Male</label><input type="radio" id="F" name="" onChange={()=>genderFilterAction("F")} checked={genderFilter.f} id="" /></span>
            </div>
                <h2>Size Filter</h2>
            <div className="size">
                <span><label for="Medium">Medium</label><input type="radio" id="Medium" onChange={()=>sizeFilterAction("M")} checked={sizeFilter.m} name="" id="" /></span>
                <span><label for="Small">Small</label><input type="radio" id="Small" onChange={()=>sizeFilterAction("S")} checked={sizeFilter.s} name="" id="" /></span>
                <span><label for="XL">Extra Large</label><input type="radio" id="XL" onChange={()=>sizeFilterAction("XL")} checked={sizeFilter.xl} name="" id="" /></span>
            </div>

        </div>
    )
}
