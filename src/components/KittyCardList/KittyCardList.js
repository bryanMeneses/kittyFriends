import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import KittyCard from '../KittyCard/KittyCard'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getKitties } from '../../actions/kittiesAction'
import SearchField from '../SearchField/SearchField';

class KittyCardList extends Component {
    componentDidMount() {
        const { getKitties } = this.props
        getKitties();
    }


    render() {
        const { kitties, kittySearchfield } = this.props;
        const filteredKitties = kitties.filter(kitties => {
            return kitties.name.toLowerCase().includes(kittySearchfield.toLowerCase())
        });
        if (!kitties) {
            return <h1>Loading...</h1>
        } else {
            return (
                <Container>
                    <h1>KittyContacts</h1>
                    <SearchField />
                    <Row className="justify-content-center">
                        <KittyCard kitties={filteredKitties} />
                    </Row>
                </Container>
            )
        }
    }
}

KittyCardList.propTypes = {
    kitties: PropTypes.array.isRequired,
    getKitties: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    kitties: state.kitties.kittyContacts,
    kittySearchfield: state.kitties.kittySearchfield
});


export default connect(mapStateToProps, { getKitties })(KittyCardList)
