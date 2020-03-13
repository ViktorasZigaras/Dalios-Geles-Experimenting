import Constants from '../constants'

export function setSelectedList( payload ) { 
    return { type: Constants.SET_SELECTED_LIST, payload } 
}

export function setDistributedListStructures( payload ) { 
    return { type: Constants.SET_DISTRIBUTED_LIST_STRUCTURES, payload } 
}