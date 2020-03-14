import React/*, { PureComponent }*/ from 'react'
import { connect } from 'react-redux'
import Actions from '../../redux/actions'
import '../sass/list.sass'

const List = ( props ) => {
    // console.log( state.distributedListStructures.length, 'length' )
    if ( state.distributedListStructures.length === 0 ) json( props )
    // console.log( props.selectedList, 'index' )
    // console.log( state.distributedListStructures[ props.selectedList ], 'content' )
    return drawList( props )   
}  

const drawList = ( props ) => {
    const onTabClick = ( index ) => props[ 'setSelectedList' ]( index )
    return (
        <div className="list-container">
            <div className="navigation-container">
                <div className="navigation">
                    <div className="tab" onClick={ ( ) => onTabClick ( 0 ) }>AB</div>
                    <div className="tab" onClick={ ( ) => onTabClick ( 1 ) }>CD</div>
                    <div className="tab" onClick={ ( ) => onTabClick ( 2 ) }>EH</div>
                    <div className="tab" onClick={ ( ) => onTabClick ( 3 ) }>IM</div>
                    <div className="tab" onClick={ ( ) => onTabClick ( 4 ) }>NP</div>
                    <div className="tab" onClick={ ( ) => onTabClick ( 5 ) }>RS</div>
                    <div className="tab" onClick={ ( ) => onTabClick ( 6 ) }>TZ</div>
                </div>
            </div>
            <div className="list"> 
                { state.distributedListStructures[ props.selectedList ] } 
            </div>
        </div>
    )
}

const groups = [ 
    [ 'A', 'B' ], 
    [ 'C', 'D' ], 
    [ 'E', 'F', 'G', 'H' ], 
    [ 'I', 'J', 'K', 'L', 'M' ], 
    [ 'N', 'O', 'P', 'Q' ], 
    [ 'R', 'S' ], 
    [ 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ] 
]

const json = ( props ) => {
    fetch( './daylily.json' ).then( ( responseObj ) => { return responseObj.json( ) } )
    .then( ( file ) => {
            state.itemList = file
            console.log( file )
            const lists = [ [ ], [ ], [ ], [ ], [ ], [ ], [ ] ]
            state.itemList.forEach( 
                ( entry ) => { 
                    if ( groups[0].includes( entry.group ) ) lists[0].push( entry )
                    else if ( groups[1].includes( entry.group ) ) lists[1].push( entry )
                    else if ( groups[2].includes( entry.group ) ) lists[2].push( entry )
                    else if ( groups[3].includes( entry.group ) ) lists[3].push( entry )
                    else if ( groups[4].includes( entry.group ) ) lists[4].push( entry )
                    else if ( groups[5].includes( entry.group ) ) lists[5].push( entry )
                    else if ( groups[6].includes( entry.group ) ) lists[6].push( entry )
                }
            )
            state.distributedLists = lists
            const structures = []
            lists.forEach( 
                ( category ) => { 
                    let html = [ ]
                    category.forEach( 
                        ( item ) => {
                            html.push(
                                <div>
                                    <div> { item.name }</div>
                                    <div>E: { item.extra }</div>
                                    <div>H: { item.height }</div>
                                    <div>R: { item.radius }</div>
                                    <div>P: { item.price }</div>
                                </div>
                            )
                        }
                    )
                    structures.push( html )
                }
            )
            state.distributedListStructures = structures
            //force update after file was loaded for the first time
            const index = props.selectedList
            props[ 'setSelectedList' ]( -1 ) 
            props[ 'setSelectedList' ]( index ) 
        }
    )    
}

const state = {
    itemList: [ ],
    distributedLists: [ ],
    distributedListStructures: [ ],
    // selectedList: 0
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        setSelectedList: ( item ) => dispatch( Actions.setSelectedList ( item ) ),
        // setDistributedListStructures: ( item ) => dispatch( Actions.setDistributedListStructures ( item ) ),
    }
}
  
const mapStateToProps = ( state ) => {
    return {
        selectedList: state.selectedList,
        // distributedListStructures: state.distributedListStructures,
    }
}
  
export default connect( mapStateToProps, mapDispatchToProps )( List )