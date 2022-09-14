import data from './data';
import { useEffect,useState } from 'react';
import { collection, getDocs,doc,updateDoc,deleteDoc } from "firebase/firestore";
import db from './firebase';
import { Link } from 'react-router-dom';
 export default function Summery(){
  let [summeryarr,setsummeryarr]=useState([])
  let [total,settotal]=useState(0)
  let [count,setcount]=useState('')
  useEffect(()=>{
   ( async ()=>{
    const querySnapshot = await getDocs(collection(db, "cart"));
    let arr=[]
    let totalval=0;
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let obj=doc.data()
        arr.push(obj)
        totalval+=obj.subtotal
    });
    setsummeryarr(arr)
     settotal(totalval)
     
    })()
    
  },[count])
     return(
        <div style={{width:'80vw',height:'100vh',display:'flex',justifyContent:'space-between',margin:'auto',paddingTop:20,flexWrap:'wrap'}}>
            <div style={{width:'70%'}}>
            <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">price</th>
      <th scope="col">quantity</th>
      <th scope="col">subtotal</th>
    </tr>
  </thead>
  <tbody>
    {
      summeryarr.map((obj)=>(
        <tr>
        <th scope="row" style={{display:'flex',justifyContent:'space-between'}}>
          <p>{obj.name}</p>
          <img src={require(`${obj.image}`)} width='50vw' style={{objectFit:'contain'}} alt="" />
        </th>
        <td>{obj.price}</td>
        <td>
          <div style={{border:'1px solid #C0C0C0',display:'flex',justifyContent:'space-between',width:'70%',borderRadius:20,alignItems:'center',paddingRight:5}}>
          <i class="fa-solid fa-minus" onClick={async()=>{
                let a= obj.quantity-1;
                let subtotal=a*obj.price
                 if(a==0){
                  await deleteDoc(doc(db, "cart", obj.slug));
                  setcount(!count);
                  return;
                 }
                const washingtonRef = doc(db, "cart",obj.slug);
                await updateDoc(washingtonRef, {
                  quantity: a,
                  subtotal:subtotal
                });
                setcount(!count)
          }}></i>{obj.quantity}<i class="fa-solid fa-plus" onClick={async()=>{
               let a= obj.quantity+1;
               if(a>obj.countInStock){
                alert('cant add more')
                return
               }
               let subtotal=a*obj.price
               const washingtonRef = doc(db, "cart",obj.slug);
               await updateDoc(washingtonRef, {
                 quantity: a,
                 subtotal:subtotal
               });
               setcount(!count)

          }}></i>
          </div>
          </td>
         
        <td>{obj.subtotal}$</td>
      </tr>
       ))
    }
   
    
  </tbody>
</table>
      
            </div>
            <div className='popup' style={{display:'flex',width:200, height:150,padding:5,flexDirection:'column'}}>
   <div style={{height:'40%',borderBottom:'1px solid #c5c5c5'}}>
   <h5>Card Total</h5>
   </div>
   <div style={{display:'flex',width:'100%',justifyContent:'space-between'}}>
    <h5>Total</h5>
    <p>{total}$</p>

   </div>
    <Link to='/thankyou'>
   <button type="button" class="btn btn-primary btn-sm" style={{textAlign:'center'}} >PROCEED TO CHECKOUT</button>
   </Link>
   <div>

   </div>
       </div>
        </div>
     )
 }