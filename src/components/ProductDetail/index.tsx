import react, { useEffect, useState } from 'react';
import { getItemAction } from '../../redux/actions/itemsActions';
import { useAppSelector, useAppDispatch } from '../../redux/store/hooks';
import '../../styles/CardItem.scss';
import DetailCard from './DetailCardItem';

const ProductDetail = (props: any) => {
    //const [item, setItem] = useState({}as any);
    const dispatch = useAppDispatch();
    const result: any = useAppSelector((state: any) => state.items.singleItem);

    useEffect(() => {
        // Buscar datos redux     
        
        if (props.ItemId)
            dispatch(getItemAction(props.ItemId))
    }, [props]);

    return (

        <div className='mx-auto container-md'>
            <nav aria-label="breadcrumb ">
                <ol className="breadcrumb  align-middle">
                    <li className="breadcrumb-item my-3"><a href="/">Items</a></li>
                    <li className="breadcrumb-item my-3 active" aria-current="page">{props.ItemId || ''}</li>
                </ol>
            </nav>
            <div className='wrapper-background custom-stack border-0'>
                <DetailCard Result={result} />

            </div>
        </div>

    );
}

export default ProductDetail;