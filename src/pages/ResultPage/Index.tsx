import react, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ResultItems from '../../components/SearchResult';


const ResultPage = () => {
    let navigate = useNavigate();
    const [searchParams] = useSearchParams();
    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        
        document.title = `Result search`;
      }, []);

    return (
        <div className='container-fluid bg-business-ligth-gray'>
           <ResultItems find={searchParams.get('search')} /> 
        </div>

    );
}

export default ResultPage;