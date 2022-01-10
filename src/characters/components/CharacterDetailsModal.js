/* Module Imports */
import React, { Component } from "react";
import { Card, CardText, CardTitle, CardBody, Spinner } from 'reactstrap';

/* Component Imports */
import Modal from '../../shared/components/modal/Modal'

/* Utils Imports */
import rockiMortiAPI from "../../utils/api/rockiMortiAPI";

/* CSS Imports */
import './CharacterDetailsModal.css';

class CharacterDetailsModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            location: null
        }
    }

    componentDidMount = async () => {
        try {
            const locationUrl = this.props.character.location.url;
            const response = await rockiMortiAPI.getLocation(locationUrl);
            let location = response.data;
            this.setState({ location: location })
        } catch (error) {
            const message = error.message + '\n' + ((error.response && error.response.data.error) || "");
            // In a real project, I would have used a taost popup to show error message.
            console.log(message);
        } finally {
            this.setState({ isLoading: false })
        }
    }

    renderBodyContent = () => {

        const loader = <div>
            <Spinner
                color="primary"
                type="grow"
            >
                Loading...
            </Spinner>
        </div>;
        if (this.state.isLoading) {
            return loader;
        }

        let character = this.props.character;
        let location = this.state.location;
        // If character is null or (loading has finished and location is still null)
        if (!character) {
            return <>No Details Avaliable!</>
        }

        let imageDetails = <div className="character-img-container">
            <img className="character-img" src={character.image} alt={character.name + ' Photo'} />
        </div>

        if (!this.state.isLoading &&
            !location) {
            return <Card className="details-card ">
                {imageDetails}
                <CardBody>
                    <CardText>
                        No location details Avaliable!
                    </CardText>
                </CardBody>
            </Card>
        }

        let contentBody = <>
            <Card className="details-card ">
                {imageDetails}
                <CardBody>
                    <CardTitle tag="h5">
                        Location Details
                    </CardTitle>
                    <CardText>
                        Name: {location.name}
                    </CardText>
                    <CardText>
                        Type: {location.type}
                    </CardText>
                    <CardText>
                        Dimension: {location.dimension}
                    </CardText>
                    <CardText>
                        Number of Residenst: {location.residents.length}
                    </CardText>
                </CardBody>
            </Card>
        </>

        return contentBody;
    }

    renderCharacter = () => {
        let title = `${this.props.character.name || 'Details'}`
        return (
            <Modal title={title} isOpen={true} toggle={this.props.modalToggle} size="lg">
                {this.renderBodyContent()}
            </Modal>
        );
    }

    render() {
        return (
            <>
                {this.renderCharacter()}
            </>
        );
    }
}


export default CharacterDetailsModal;