import React, { PureComponent } from 'react'
import '../sass/list.sass'

class List extends PureComponent {
    constructor( props ) {
        super( props )
        this.state = {
            itemList: [ ],
            distributedLists: [ ],
            distributedListStructures: [ ],
            selectedList: 0
        }

        //AB
        //CD
        //EFGH
        //IJKLM
        //NOPQ
        //RS
        //TUVWXYZ

        const formLists = ( lists ) => {
            const structures = []
            // let html = ''
            lists.forEach( ( category ) => { 
                let html = [ ]
                category.forEach( ( item ) => {
                    html.push(
                    <div>
                        <div> { item.name }</div>
                        <div>E: { item.extra }</div>
                        <div>H: { item.height }</div>
                        <div>R: { item.radius }</div>
                        <div>P: { item.price }</div>
                    </div>)
                })
                structures.push( html )
            })
            console.log( structures )
            // this.setState( { distributedListStructures: structures } )
            this.state.distributedListStructures = structures
        }

        const json = ( ) => {
            const request = new XMLHttpRequest( )
            request.open( 'GET', './daylily.json', false )
            request.send( null )
            const file = JSON.parse( request.responseText ).sort( ( a, b ) => ( a.name > b.name ) ? 1 : -1 )
            // this.setState( { itemList: file } )
            this.state.itemList = file
            // return console.log( file, 'bbb', file.length )
            const lists = [ [ ], [ ], [ ], [ ], [ ], [ ], [ ] ]
            //
            file.forEach( ( entry ) => { 
                if ( 
                    entry.group === 'A' || 
                    entry.group === 'B' 
                ) lists[0].push( entry )
                else if ( 
                    entry.group === 'C' || 
                    entry.group === 'D' 
                ) lists[1].push( entry )
                else if ( 
                    entry.group === 'E' || 
                    entry.group === 'F' || 
                    entry.group === 'G' || 
                    entry.group === 'H' 
                ) lists[2].push( entry )
                else if ( 
                    entry.group === 'I' || 
                    entry.group === 'J' || 
                    entry.group === 'K' || 
                    entry.group === 'L' || 
                    entry.group === 'M' 
                ) lists[3].push( entry )
                else if ( 
                    entry.group === 'N' || 
                    entry.group === 'O' || 
                    entry.group === 'P' || 
                    entry.group === 'Q' 
                ) lists[4].push( entry )
                else if ( 
                    entry.group === 'R' || 
                    entry.group === 'S' 
                ) lists[5].push( entry )
                else if ( 
                    entry.group === 'T' || 
                    entry.group === 'U' || 
                    entry.group === 'V' || 
                    entry.group === 'W' || 
                    entry.group === 'X' ||
                    entry.group === 'Y' ||
                    entry.group === 'Z' 
                ) lists[6].push( entry )
            })
            this.state.distributedLists = lists
            // this.setState( { distributedLists: lists } )
            //
            console.log( lists )

            formLists( lists )

            //return 
        }

        json( )

        console.log( this.state );
        

    }
 
    render( ) {
        return (
            <div>
                <div className="navigation">
                    <div 
                        className="tab" 
                        onClick={ ( ) => this.setState( { selectedList: 0 } ) }
                    >AB</div>
                    <div 
                        className="tab" 
                        onClick={ ( ) => this.setState( { selectedList: 1 } ) }
                    >CD</div>
                    <div 
                        className="tab" 
                        onClick={ ( ) => this.setState( { selectedList: 2 } ) }
                    >EH</div>
                    <div 
                        className="tab" 
                        onClick={ ( ) => this.setState( { selectedList: 3 } ) }
                    >IM</div>
                    <div 
                        className="tab" 
                        onClick={ ( ) => this.setState( { selectedList: 4 } ) }
                    >NP</div>
                    <div 
                        className="tab" 
                        onClick={ ( ) => this.setState( { selectedList: 5 } ) }
                    >RS</div>
                    <div 
                        className="tab" 
                        onClick={ ( ) => this.setState( { selectedList: 6 } ) }
                    >TZ</div>
                </div>
                <div> { this.state.distributedListStructures[ this.state.selectedList ] } </div>
            </div>
            
        )

        // return `
        // <div>
        //     ${ this.state.distributedListStructures[ this.state.selectedList ] }
        // </div>
        // `
    }
}   

export default List