import { ADD_product } from "./ProductActionTypes"

const initialState = {
    errorMessage: '',
    isLoading: '',
    data: [
        
    ]
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_product: {
            return {
                ...state,
                data: [...state.data, { ...action.value }]
            };
        }
        default: {
            return state;
        }
    }
};
