import React from 'react';
import { Provider } from 'react-redux';
import PageHeader from '../common/PageHeader'
import ProductListView from './components/ProductListView'
import { productStore } from './redux/product/ProductStore';


function ReactReduxHost() {
    return (
        <React.Fragment>
            <Provider store={productStore}>
                <PageHeader></PageHeader>
                <div className="jumbotron">
                    <h2>React redux examples.</h2>
                    <div className="row">
                        <div className="col-5">
                            <div className="box">

                            </div>
                        </div>
                        <div className="col-7">
                            <ProductListView />
                        </div>
                    </div>
                </div>
            </Provider>

        </React.Fragment>
    )
}

export default ReactReduxHost
