export const api=()=>{
  const response=  fetch('https://fakestoreapi.com/products/1')
    .then(res=>res.json())
    .then(json=>console.log(json))
    console.log(response);
 

}