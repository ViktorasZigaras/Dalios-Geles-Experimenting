import React/*, { PureComponent }*/ from 'react'
import { connect } from 'react-redux'
import Actions from '../../redux/actions'
import '../sass/navigation.sass'

const Navigation = ( props ) => {
    const onTabClick = ( index ) => props[ 'setSelectedList' ]( index )
    return (
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