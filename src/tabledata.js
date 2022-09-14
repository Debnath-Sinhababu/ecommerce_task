import { useEffect, useState } from "react";
import { doc, setDoc,getDoc, updateDoc,deleteDoc } from "firebase/firestore";
import db from "./firebase";
import { async } from "@firebase/util";
 export default function  Tablerow({obj}){
    let [count,setcount]=useState(0)
     let [outofstock,setoutofstock]=useState(false)
     let [a,seta]=useState()
     let [ischecked,updatecheck]=useState(false)
     
     useEffect(()=>{
        ( async ()=>{
            const docRef = doc(db, "cart", obj.slug);
            const docSnap = await getDoc(docRef);
               if(docSnap.exists()) {
                let data=docSnap.data();
                 if(data.countInStock==data.quantity){
                    setoutofstock(true)
                 }
                 else{
                    setoutofstock(false)
                 }
               }  
               else{
                console.log(outofstock)
                setoutofstock(false)
               }     
        }

        )()
       
     },[a,obj.slug])
     useEffect(()=>{
       setcount(0)
    
     },[obj.slug])
     return(
        <tr>
        <th scope="row">
          <img src={require(`${obj.image}`)} width='50vw' style={{objectFit:'contain'}} alt="" />

        </th>
        <td>{obj.name}</td>
        <td>{obj.color}</td>
        {
            !outofstock? <td style={{color:'green'}}>In Stock</td>: <td style={{color:'green'}}>Out of Stock</td>
        }
        <td>{obj.price}$</td>
        <td colSpan="3">
            <input type="number" style={{width:40,backgroundColor:'#E5E4E3',border:0,marginRight:5,outline:'none'}} 
             value={count} min='0' onChange={async(e)=>{
                 
                  
                if(e.target.value>obj.countInStock){
                    alert('cant go more')
                  
                   return
                }
                setcount(e.target.value)
                const docRef = doc(db, "cart", obj.slug);
                const docSnap = await getDoc(docRef);
                  
                 
                   if(docSnap.exists()){
                 
                     if(docSnap.data().quantity>obj.countInStock){
                    
                       alert('out of stock, cant add more')
                       return
                     }
                   }
               
               
              
              
               if(ischecked){
                let total=obj.price*e.target.value
                let q=Number(e.target.value)
                 
              
           
                const washingtonRef = doc(db, "cart",obj.slug);
                await updateDoc(washingtonRef, {
                  quantity: q,
                  subtotal:total
                });
            
               }
           
          }}
            />
            <i class="fa-solid fa-cart-plus" style={{marginRight:5}}></i>
            <input type="checkbox" name={`${obj.slug}`} id={`${obj.slug}`}   onClick={async(e)=>{
                 if(outofstock){
                
                    alert('out of stock')
                    e.target.checked=false
                    return
                 }
               if(count==0){
                alert('pls select amount of product first')
                e.target.checked=false
                return
               }
             
                
               
                // let copyobj={
                //     name: obj.name,
                //     image: obj.image,
                //     price: obj.price,
                //     quantity: count,
                //     countInStock: obj.countInStock,
                //     subtotal: total
                //   }
              
                
const docRef = doc(db, "cart", obj.slug);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
     if(e.target.checked){
      
      let total=Number(obj.price*count)+ Number(docSnap.data().subtotal)
      let val=Number(count)
      let qval=val+ docSnap.data().quantity
      
      if(qval>=obj.countInStock){
      
        setoutofstock(true)
         let total=obj.countInStock*obj.price
        const washingtonRef = doc(db, "cart",obj.slug);
        await updateDoc(washingtonRef, {
          quantity: obj.countInStock,
          subtotal:total,
       
        });
        return;
      }
      alert(`${count} Products Added to Cart`)
      updatecheck(true)
  const washingtonRef = doc(db, "cart",obj.slug);
  await updateDoc(washingtonRef, {
    quantity: qval,
    subtotal:total
  });
}
 
} else {
  // doc.data() will be undefined in this case
  if(e.target.checked){
   
    updatecheck(true)
    let total=count*obj.price
    let val=Number(count)
    if(val>=obj.countInStock){
      let total=obj.countInStock*obj.price
      setoutofstock(true)
      await setDoc(doc(db, "cart",obj.slug), {
        name: obj.name,
        image: obj.image,
        price: obj.price,
        quantity:obj.countInStock,
        countInStock: obj.countInStock,
        slug:obj.slug,
        subtotal: total,
      
      });
      return;
    }
   
    alert(`${count} Products Added to Cart`)
  await setDoc(doc(db, "cart",obj.slug), {
    name: obj.name,
    image: obj.image,
    price: obj.price,
    quantity: val,
    countInStock: obj.countInStock,
    slug:obj.slug,
    subtotal: total,
   
  });
  
}
 
}

                 
            
              if(!e.target.checked){
                await deleteDoc(doc(db, "cart",obj.slug));
              
                alert('product removed from cart')
                 updatecheck(false)
               }
              
               let b=!a
               seta(b)
            }}
            />
        </td>
      </tr>
     )
 }