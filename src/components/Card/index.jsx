import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const Card = (data) => {
  const context = useContext(ShoppingCartContext)

  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
        <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title} />
        <div
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={() => context.setCount(context.count + 1)}>
          +
        </div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{data.data.title}</span>
        <span className='text-lg font-medium'>${data.data.price}</span>
      </p>
    </div>
  )
}

export default Card



// const Card = (data) => {
//   const product = data.data;

//   // Función para limpiar la URL de imágenes incorrectas
//   const cleanImageUrl = (image) => {
//     try {
//       return JSON.parse(image);
//     } catch {
//       return image; // Devuelve la imagen sin cambios si no es un JSON válido
//     }
//   };

//   const imageUrl = product.images && product.images.length > 0
//     ? cleanImageUrl(product.images[0])
//     : 'https://via.placeholder.com/224';

//   return (
//     <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
//       <figure className='relative mb-2 w-full h-4/5'>
//         <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
//           {product.category?.name || 'Unknown Category'}
//         </span>
//         <img 
//           className='w-full h-full object-cover rounded-lg' 
//           src={imageUrl} 
//           alt={product.title || 'No Title'} 
//         />
//         <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
//           +
//         </div>
//       </figure>
//       <p className='flex justify-between'>
//         <span className='text-sm font-light'>{product.title || 'No Title'}</span>
//         <span className='text-lg font-medium'>${product.price || '0.00'}</span>
//       </p>
//     </div>
//   );
// };

// export default Card;

