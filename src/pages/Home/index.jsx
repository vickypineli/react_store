import { useState, useEffect } from "react"
import Layout from "../../components/Layout/index.jsx"
import Card from "../../components/Card/index.jsx"
import ProductDetail from "../../components/ProductDetail/index.jsx"

function Home() {
    const [items, setItems] = useState(null)
  
    useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
   // fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])



    return (
      <Layout>
        Home
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {
            items?.map(item => (
              <Card key={item.id} data={item} />
            ))
          }
        </div>
        <ProductDetail />
      </Layout>
    )
  }
  
  export default Home

// Home.jsx
// import { useState, useEffect } from "react";
// import Layout from "../../components/Layout/index.jsx";
// import Card from "../../components/Card/index.jsx";

// function Home() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetch('https://api.escuelajs.co/api/v1/products')
//       .then(response => response.json())
//       .then(data => {
//         // Filtrar productos que tengan datos necesarios
//         const validItems = data.filter(item => 
//           item.images && item.images.length > 0 && item.title && item.price !== undefined && item.category
//         );
//         setItems(validItems);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <Layout>
//       <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
//         {
//           items.length > 0 ? (
//             items.map(item => (
//               <Card key={item.id} data={item} />
//             ))
//           ) : (
//             <p>No products available.</p>
//           )
//         }
//       </div>
//     </Layout>
//   );
// }

// export default Home;
