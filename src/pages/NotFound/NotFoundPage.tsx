import React from 'react';

import { ReactComponent as Icon404 } from '../../assets/icons/Icon-404.svg';
import './NotFoundPage.css';
class NotFoundPage extends React.Component<any, any> {
  

  render() {
    return <div className="not-found-main"  >
      <div className="not-found-centered">
            <div>OOPS!</div>
            <div>No hemos encontrado la pagina!</div>
      </div>


    </div>;
  }
}

export default NotFoundPage;