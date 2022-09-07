import react, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../../components/ProductDetail';


const ProductDetailPage = () => {
    const [itemId, setItemId] = useState('');
    let params = useParams();
    useEffect(() => {
        // Buscar datos redux     
        setItemId(params.id as string);
        
    }, []);
    return (
        <div className='container-fluid bg-business-ligth-gray'>
           <ProductDetail ItemId={itemId} /> 
        </div>

    );
}

export default ProductDetailPage;