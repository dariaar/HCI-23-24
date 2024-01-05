import Image from "next/image";
import cart from "@/public/hero/cart.png"
function ShoppingCartPage() {
    return (
        <div className="container-fluid  mt-100">
        <div className="row">
        
           <div className="col-md-12">
           
                   <div className="card">
               <div className="card-header">
               <h1 className=" text-center text-3xl font-bold text-terra mt-2 mb-2">Shopping Cart</h1>
               </div>
               <div className="card-body cart">
                       <div className="flex justify-center items-center">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#794C53" className="w-50 h-40">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>

                           </div>
                           <div className="flex flex-col justify-center items-center">
                           <h3 className="text-terra font-bold mt-2">Your Shopping Cart is Empty.</h3>
                           <a href="/shop/shop-all">
                           <button className="border rounded-2xl border-terra px-6 py-2 text-terra mt-4 mb-4 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-xl">
        SHOP NOW
      </button>
      </a>
                           
                       </div>
               </div>
       </div>
               
           
           </div>
        
        </div>
       </div>
      
    );
}

export default ShoppingCartPage;