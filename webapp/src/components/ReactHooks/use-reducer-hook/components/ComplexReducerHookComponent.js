import React, { useReducer, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'

import '../../../../commonStyles.scss';
export default function ComplexReducerHookComponent() {
    const data = {
        users: []
    };
    const [count, setCount] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: ""
    });

    const inputChangeHandler = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    const incrementCount = () => {
        setCount(prev => prev + 1);
    }

    const formSubmitHandler = (event) => {
        dispatch({ type: 'add', value: formData });
        event.preventDefault();

    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'add':
                {
                    incrementCount();
                    data.users = [...state.users, { id: count, ...action.value }];
                    return data;

                }
            case 'delete': {
                const filteredData = state.users.filter((user) => user.id !== action.value.id);
                data.users = [...filteredData];
                return data;
            }

            case 'edit': {
                const filteredData = state.users.filter((user) => user.id === action.value.id);
                filteredData[0] = {...filteredData[0], ...action.value };
                data.users = [...state.user, ...filteredData];
                return data;
            }

            default:
                return data;
        }
    };

    let [state, dispatch] = useReducer(reducer, data);

    function getTableTemplate() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone number</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                state.users.map(user => (
                                    <tr key={user.id}>
                                        <td scope="col">{user.id}</td>
                                        <td scope="col">{user.name}</td>
                                        <td scope="col">{user.phoneNumber}</td>
                                        <td scope="col">
                                            <tr>
                                                <td>
                                                    <FontAwesomeIcon style={{cursor: "pointer"}} icon={faTrash} onClick={() => dispatch({
                                                        type: "delete" , value: user
                                                    })} />

                                                </td>
                                                <td>
                                                    <FontAwesomeIcon style={{cursor: "pointer"}} icon={faPencilAlt} />

                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }

    function getFormTemplate() {
        return (
            <React.Fragment>
                <form onSubmit={(event) => formSubmitHandler(event)}>
                    <div className="form-group">
                        <label >Name:</label>
                        <input type="text" className="form-control" id="name" name="name"
                            placeholder="Enter Name" onChange={(event) => inputChangeHandler(event)} />
                    </div>
                    <div className="form-group">
                        <label >Phone number:</label>
                        <input type="text" className="form-control" id="pwd"
                            placeholder="Enter phone number" name="phoneNumber" onChange={(event) => inputChangeHandler(event)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Add user</button>
                </form>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <h3>Reducer Hook example 2 (complex state, action)</h3>
            <hr></hr>
            <div className="row">
                <div className="col">
                    <div className="box">
                        {getFormTemplate()}
                    </div>
                </div>
                <div className="col">
                    {
                        getTableTemplate()
                    }
                </div>
            </div>

        </React.Fragment>
    )
}
