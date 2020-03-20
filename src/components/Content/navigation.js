import React/*, { PureComponent }*/ from 'react'
import { connect } from 'react-redux'
import Actions from '../../redux/actions'
import '../sass/navigation.sass'

const Navigation = ( props ) => {
    const onTabClick = ( index ) => props[ 'setSelectedList' ]( index )
    return (
        <div className="navigation-container">
            <div className="tab" 
                onClick={ ( ) => onTabClick ( 0 ) }>
                Apie
            </div>
            <div className="tab" 
                onClick={ ( ) => onTabClick ( 1 ) }>
                Viendienės A-B
            </div>
            <div className="tab" 
                onClick={ ( ) => onTabClick ( 2 ) }>
                Viendienės C-D
            </div>
            <div className="tab" 
                onClick={ ( ) => onTabClick ( 3 ) }>
                Viendienės E-H
            </div>
            <div className="tab" 
                onClick={ ( ) => onTabClick ( 4 ) }>
                Viendienės I-M
            </div>
            <div className="tab" 
                onClick={ ( ) => onTabClick ( 5 ) }>
                Viendienės N-P
            </div>
            <div className="tab" 
                onClick={ ( ) => onTabClick ( 6 ) }>
                Viendienės R-S
            </div>
            <div className="tab" 
                onClick={ ( ) => onTabClick ( 7 ) }>
                Viendienės T-Z
            </div>
        </div>
    )   
}  

const mapDispatchToProps = ( dispatch ) => {
    return {
        setSelectedList: ( item ) => dispatch( Actions.setSelectedList ( item ) ),
    }
}
  
/*const mapStateToProps = ( state ) => {
    return {
        selectedList: state.selectedList,
    }
}*/
  
export default connect( /*mapStateToProps*/null, mapDispatchToProps )( Navigation )