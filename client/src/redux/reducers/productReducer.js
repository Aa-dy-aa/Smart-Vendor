
import * as actionTypes from '../constants/productConstants';

export const getProductsReducer=(state={products:[]},action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {products:action.payload}
        case actionTypes.GET_PRODUCTS_FAIL:
            return {...state,error:action.payload} 
        default:
            return state
    }
}

export const getProductDetailsReducer=(state={product:{}},action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return {...state,loading:true}
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return {loading:false,product:action.payload}
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {loading: false, error: action.payload};
        case actionTypes.GET_PRODUCT_DETAILS_RESET:
            return {product:{}}
        default:
            return state
    }
}