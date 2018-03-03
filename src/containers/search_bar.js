import React, { Component } from 'react';
import { connect } from 'react-redux';
import bindActionToProps from 'redux';

class SearchBar extends Component {
    render(){
        return(
            <div>
                <input type = 'text'/>
            </div>
        )
    }
}

function mapStateToProps( state ) {
    return {
        term: state.term;
    }
}

function mapDispatchToProps( state ) {
    return null;
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);