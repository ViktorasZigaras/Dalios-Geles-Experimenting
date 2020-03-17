import React/*, { PureComponent }*/ from 'react'
import { connect } from 'react-redux'
import Actions from '../../redux/actions'
import '../sass/list.sass'

const List = ( props ) => {
    if ( state.distributedListStructures.length === 0 ) json( props )
    return drawList( props )   
}  

const drawList = ( props ) => {
    return (
        <div className="list-container">
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
            // console.log( file )
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
            let url1 = ''
            let url2 = ''
            lists.forEach( 
                ( category ) => { 
                    let html = [ ]
                    category.forEach( 
                        ( item ) => {
                            url1 = `./pictures/daylily/${ item.img }-1.jpg`
                            url2 = `./pictures/daylily/${ item.img }-2.jpg`
                            html.push(
                                <div className="list-item">
                                    
                                    <div className="list-images">
                                        <a href={ url1 } target="_blank">
                                            <img src={ url1 }></img>
                                        </a>
                                        <a href={ url2 } target="_blank">
                                            <img src={ url2 }></img>
                                        </a>
                                    </div>
                                    

                                    <div className="list-item-details">
                                        <div className="list-item-title"> { item.name }</div>
                                        <div className="list-item-extra">{ item.extra } &nbsp;</div>
                                        <div className="list-item-info">Aukštis { item.height } cm &nbsp; ⵁ { item.radius } cm</div>
                                        <div className="list-item-price">Kaina { item.price } €</div>
                                    </div>
                                    
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
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        setSelectedList: ( item ) => dispatch( Actions.setSelectedList ( item ) ),
    }
}
  
const mapStateToProps = ( state ) => {
    return {
        selectedList: state.selectedList,
    }
}
  
export default connect( mapStateToProps, mapDispatchToProps )( List )