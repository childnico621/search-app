import react, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import shipping from '../../assets/ic_shipping.png';
import '../../styles/ResultCard.scss';
//ResultCard

const ResultCard = (props: any) => {
     const [item, setItem] = useState({}as any);
     let navigate = useNavigate();

    useEffect(() => {
        // Buscar datos        
        setItem(props.item);
    }, []);

    const handleClick = (id: string) => {
        navigate(`/items/${id}`);
    }

    return (
       item && <div key={item.key} className="card border-bottom card-border-bottom card-no-radius card-bg-light" >
            <div className="row g-0 m-16">
                <div className="col-md-2 offset-md-1" onClick={()=>handleClick(item.id)}>
                    <img src={item.picture} className="img-fluid rounded-2 " alt={item.title} width='180' height={'auto'}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{`$ ${item.price?.amount || 0}`} 
                            {item.free_shipping && <span className='m-16-l'><img src={shipping} alt="free_shipping" /></span> }
                        </h5>
                        <p className="card-text">{item.title}</p>
                        <p className="card-text"><small className="text-muted">{item.condition}</small></p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ResultCard;