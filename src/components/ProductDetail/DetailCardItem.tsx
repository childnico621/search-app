import react, { useEffect, useState } from 'react';
import shipping from '../../assets/ic_shipping.png';
import '../../styles/CardItem.scss';
//ResultCard

const DetailCard = (props: any) => {
    const [result, setResult] = useState({} as any);
    const [show, setShow] = useState(false);


    useEffect(() => {
        // Buscar datos  
        if (props.Result) {
            setShow(validateObject(props.Result.item));
            setResult(props.Result.item);
        }
    }, [props]);

    let validateObject = (obj: any) => {
        return (obj && obj.price);
    }

    return (
        show ? (<div className="row w100 bg-white p-32-l mt-3" >
            <div className="col col-md-8">
                <div className="row p-32-b mt">
                    <img className='p-32-t' src={result.picture || ''} alt={result.title} height={680} />
                </div>
                <div className="row ">
                    <div className='h3 text-28 p-32-b'>Descripcion del Producto</div>
                    <div className='text-16 p-32-b'>{result.description}</div>
                </div>
            </div>
            <div className="col col-md-4">
                <div className="row">
                    <span className='text-14 p-32-t'>{result.condition} - {`${result.sold_quantity} vendidos`}</span>
                    <h3 className='text-24 m-16-t'>{result.title}</h3>
                    <div className='text-46 p-32-b' >$ {result.price.amount} </div>

                    <div className='my-4 pr-32'>
                        <button className='btn btn-primary text-white '>Comprar</button>
                    </div>
                </div>
            </div>
        </div>) : null

    );
}

export default DetailCard;