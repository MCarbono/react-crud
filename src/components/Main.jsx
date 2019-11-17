import React, {Fragment} from 'react';
import './Main.css';
import Header from './Header'

/*o código {...props} pega as propriedades passadas pelo main e os adiciona no header*/ 
export default props => 
    <Fragment>
        <Header {...props}/>
        <main className="content container-fluid">
          <div className="p-3 mt-3">
              {props.children}
          </div>
        </main>
    </Fragment>
