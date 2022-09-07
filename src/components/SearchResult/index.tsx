import react, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchAction } from '../../redux/actions/itemsActions';
import { setTextAction } from '../../redux/actions/searchBarAction';
import { useAppSelector, useAppDispatch } from '../../redux/store/hooks';
import { IResultItems } from '../../types/ResultItems';
import '../../styles/SearchResult.scss';
import ResultCard from './ResultCard';

const ResultItems = (props: any) => {
    // const [search, setSearch] = useState('');

    const dispatch = useAppDispatch();
    const textToSearch: string = useAppSelector((state: any) => state.search.textToSearch);
    const result: IResultItems = useAppSelector((state: any) => state.items.result);
    useEffect(() => {
        // Buscar datos
        
        if (textToSearch.length > 0) {
            dispatch(setTextAction(textToSearch));
            dispatch(searchAction(textToSearch));
        }
    }, [textToSearch]);


    return (
        <div className='mx-auto container-md'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Items</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Search</li>
                </ol>
            </nav>
            <div className='search-background custom-stack border-0 border-white'>
                {
                    (result.items).map((item: any, index: number) => (
                        <ResultCard item={item} key={index} />
                    ))
                }
            </div>

        </div>
    );
}

export default ResultItems;