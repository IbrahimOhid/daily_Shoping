export const initialValue = {
    cartData: []
}
export const CartReducer = (state, action) =>{
     switch (action.type) {
        case 'ADD_TO_CART':
            return{

            }
            break;
        case 'REMOVE_CART':

            break;
        default:
            return state;
    }
}