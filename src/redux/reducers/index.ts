import CommonReducer from './Common';
import ItemsReducer from './Items';
import SearchBar from './SearchBar';
const reducers = {
    common: CommonReducer,
    items: ItemsReducer,
    search: SearchBar,
    // news: NewsReducer,
    // offer: OfferReducer,
    // training: TrainingReducer,
    // countries:CountriesReducer

};

export default reducers;