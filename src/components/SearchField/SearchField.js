import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSearchfield } from '../../actions/setSearchfield';
import PropTypes from 'prop-types'


class SearchField extends Component {


    onInputChange = e => {
        this.props.setSearchfield(e.target.value)
    }

    render() {
        return (
            <React.Fragment>
                <h3 className="text-muted">Look up a name:</h3>
                <input
                    className="border border-secondary rounded"
                    type="text"
                    name="kittySearchField"
                    onChange={this.onInputChange}

                />
            </React.Fragment>
        )
    }
}

SearchField.propTypes = {
    setSearchfield: PropTypes.func.isRequired
}

export default connect(null, { setSearchfield })(SearchField)
