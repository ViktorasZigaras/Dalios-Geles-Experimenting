import Constants from '../constants'

const initialState = {
    //a list of all properties
}

export default function rootReducer( state = initialState , action ) {
    /*if ( action.type === Constants.SET_SELECTED_FUND ) {
        let fundName = ''
        let fundId = ''
        if ( action.payload ) {
            fundName = action.payload.fundName
            fundId = action.payload.fundId
        }
        return Object.assign( {}, state, {
            selectedFund: action.payload,
            fundName: fundName,
            fundId: fundId
        } )
    }*/
    /*else if ( action.type === Constants.SET_ITEM_TAX ) {
        return Object.assign( {}, state, { itemTax: action.payload } )
    }
    else { return state }*/
}