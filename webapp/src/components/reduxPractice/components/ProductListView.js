import React from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { addProduct, deleteProduct } from '../redux/product/ProductActions';

// import '../../../commonStyles.scss';

function ProductListView(props) {
    const { store, handler } = props;
    return (
        <React.Fragment>
            <div className="container-fluid">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Category</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            store.data.length > 0?
                            store.data.map(product => (
                                <tr key={product.id}>
                                    <td scope="col">{product.id}</td>
                                    <td scope="col">{product.name}</td>
                                    <td scope="col">{product.description}</td>
                                    <td scope="col">{product.category}</td>
                                    <td scope="col">{product.price}</td>
                                    <td scope="col">
                                        <tr>
                                            <td>
                                                <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faTrash} />

                                            </td>
                                            <td>
                                                <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faPencilAlt} />

                                            </td>
                                        </tr>
                                    </td>
                                </tr>
                            )) : <p>No data to display.</p>
                        }
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        store: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handler: {
            addProduct: () => dispatch(addProduct),
            deleteProduct: () => dispatch(deleteProduct)
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductListView);
