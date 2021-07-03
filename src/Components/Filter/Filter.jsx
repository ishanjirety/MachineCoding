import React, { useState } from 'react'
import { useProduct } from '../../Context/Product'

export const Filter = () => {
    const [priceFilter, setPriceFilter] = useState({
        high:false,
        low:false,
    })
    const [brandFilter,setBrandFilter] = useState({
        allenSolly:false,
        beingHuman:false,
        peterEngland:false
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
                peterEngland:true}
            })
     
        }else if(action === "Being human"){
            productDispatch({ type: "RESET" })
            productDispatch({ type: "SORT-BY-BRAND",payload:"Being human" })
            setBrandFilter(()=>{
                return { allenSolly:false,
                beingHuman:true,
                peterEngland:false}
            })
        }
        else{
            productDispatch({ type: "RESET" })
            productDispatch({ type: "SORT-BY-BRAND",payload:"Allen Solly" })
            setBrandFilter(()=>{
                return { allenSolly:true,
                beingHuman:false,
                peterEngland:false}
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
            <div className="price-filter">
            
                <h2>Price Filter</h2>
                <input type="radio" onChange={() =>filterAction("HIGH-TO-LOW") } checked={priceFilter.high} name="" id="" />
                <input type="radio" onChange={() => filterAction("LOW-TO-HIGH")}  checked={priceFilter.low} name="" id="" />
            </div>
            <div className="brand">
                <h2>Brand Filter</h2>
                <input type="radio" onChange={()=>brandFilterAction("Allen Solly")} checked = {brandFilter.allenSolly} name="" id="" />
                <input type="radio" onChange={()=>brandFilterAction("Being human")} checked = {brandFilter.beingHuman} name="" id="" />
                <input type="radio" onChange={()=>brandFilterAction("Peter England")} checked = {brandFilter.peterEngland} name="" id="" />
            </div>
            <div className="gender">
                <h2>Gender Filter</h2>
                <input type="radio" onChange={()=>genderFilterAction("M")} checked={genderFilter.m} name="" id="" />
                <input type="radio" name="" onChange={()=>genderFilterAction("F")} checked={genderFilter.f} id="" />
            </div>
            <div className="size">
                <h2>Size Filter</h2>
                <input type="radio" onChange={()=>sizeFilterAction("M")} checked={sizeFilter.m} name="" id="" />
                <input type="radio" onChange={()=>sizeFilterAction("S")} checked={sizeFilter.s} name="" id="" />
                <input type="radio" onChange={()=>sizeFilterAction("XL")} checked={sizeFilter.xl} name="" id="" />
            </div>

        </div>
    )
}
