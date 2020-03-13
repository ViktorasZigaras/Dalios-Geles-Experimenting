import Constants from '../constants'

const initialState = {
    selectedList: 0,
    distributedListStructures: [],
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
    }
    else*/ if ( action.type === Constants.SET_SELECTED_LIST ) {
        return Object.assign( {}, state, { selectedList: action.payload } )
    }
    else if ( action.type === Constants.SET_DISTRIBUTED_LIST_STRUCTURES ) {
        return Object.assign( {}, state, { distributedListStructures: action.payload } )
    }
    
    else { return state }
}