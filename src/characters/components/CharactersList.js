/* Module Imports */
import React from "react";
import { Row, Col } from "reactstrap";

/* Component Imports */
import Character from './Character';

const CharactersList = (props) => {

    const renderCharacters = () => {
        if (props.characters && props.characters.length > 0) {
            return props.characters.map((character) => {
                return (
                    <Col key={character.id} className="bg-light">
                        <Character character={character} onClick={props.onClickCharacter}/>
                    </Col>
                );
            })
        }

        return <div>No Characters found!</div>
    }
    
    return (
        <>
            <Row md="4"
                sm="2"
                xs="1">
                {renderCharacters()}
            </Row>

        </>
    );
}

export default CharactersList;