import data from "./data"
  import { Link } from "react-router-dom";
  import { useState } from "react";
  import { sizeobj } from "./data";
  import { useEffect } from "react";
import Tablerow from "./tabledata";
import { categoryarr } from "./data";
export default function Productlist(){
  let [selectitem,setselect]=useState('select')
  let [itemsize,setsize]=useState('size')
  let [copyarr,setcopyarr]=useState([])
  let [inputval,setinputval]=useState('')
  let [checkarr,setcheckarr]=useState([])
  let [bool,setbool]=useState()
 
  console.log(copyarr)
  console.log(selectitem)
   useEffect(()=>{
   
      if(selectitem=='select'){
      setcopyarr(data.products)
      setcheckarr(data.products)
      }
      else{
         if(itemsize=='size'){
        let arr=data.products.filter((obj)=>{
          return  obj.category==selectitem
        })
        setcopyarr(arr)
        setcheckarr(arr)
      }
      else{
        let arr=data.products.filter((obj)=>{
          return  obj.category==selectitem && obj.size==itemsize
        })
        setcopyarr(arr)
        setcheckarr(arr)
      }
      }
      
   },[selectitem,itemsize,bool])
    return(
        <div style={{marginTop:20,width:'100vw',display:'flex',flexDirection:'column',alignItems:'center'}}>
        <nav style={{width:'80%',display:'flex',justifyContent:'space-between',margin:'auto',flexWrap:'wrap'}}>
          <div style={{display:'flex',width:'300px',justifyContent:'space-between',marginTop:20}}>
           <div>
           <div class="dropdown" >
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   {selectitem}
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
      {
        categoryarr.map((ele)=>(
          <button class="dropdown-item" type="button" onClick={(e)=>{
            setselect(ele)
            setsize('size')
        }}>
          {ele}</button>
        ))
      }
  
  </div>
</div>
           </div>
           <div>
           <div class="dropdown">
           <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             {itemsize}
           </button>
           <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
           
            {  selectitem=='select'? '':
                 
              sizeobj[selectitem].map((ele)=>(
                <button class="dropdown-item" type="button" onClick={()=>{
                  setsize(ele)
                }}>{ele}</button>
              ))
              
            
           
            }
            <button class="dropdown-item" type="button" onClick={()=>{
                setsize('size')
              }}>size</button>
            
           </div>
         </div>
           </div>
           <div>
           <p style={{color:'green',cursor:'pointer'}} onClick={()=>{
           
            setselect('select')
            setsize('size')
            setbool(!bool)
           }}><i class="fa-solid fa-rotate-left"></i>Reset</p>
           </div>
          </div>
          <div style={{display:'flex',justifyContent:'space-between',width:'35%',gap:7,marginTop:20}}>
            <div style={{display:'flex'}}>
                <span>Search</span>
                <input type="search" name="" id="" value={inputval} style={{backgroundColor:'#E5E4E3',border:0,outline:'none',height:30}}
                 onChange={(e)=>{
                   setinputval(e.target.value)
                  //  if(e.target.val==null){
                  //   console.log(e.target.value)
                  //   let a=!bool
                  //   setbool(a)
                  
                  //  }
                    
                  
                  let arr=copyarr.filter((obj)=>{
                      if(obj.name.includes(e.target.value))
                        return obj
                  }) 
                  console.log(arr)
                  setcheckarr(arr) 
                 }}
                />
            </div>
            <Link to='/checkout'>
            <div>
            <button type="button" class="btn btn-primary btn-sm">Add To Cart</button>
            </div>
            </Link>
          </div>
        </nav>
        <div style={{marginTop:50,width:'80%'}}>
        <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Color</th>
      <th scope="col">Stock</th>
      <th scope="col">Price</th>
      <th scope="col">Buy</th>
    </tr>
  </thead>
  <tbody>
    {
        checkarr.map((obj)=>(
           <Tablerow obj={obj}/>
        ))
    }
  
    
  </tbody>
</table>
        </div>
        </div>
    )
}