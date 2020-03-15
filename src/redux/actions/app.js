import Constants from '../constants'

export function setSelectedList( payload ) { 
    return { type: Constants.SET_SELECTED_LIST, payload } 
}