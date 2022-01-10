/* Module Imports */
import React from "react";
import { Card, CardText, CardTitle } from 'reactstrap';

/* CSS Imports */
import './Character.css';

const Character = ({ character, onClick }) => {

    const renderCharacter = () => {
        return (
            <Card
                body
                color="info"
                inverse
                className="character-card"
                onClick={() => {
                    onClick(character.id);
                }}
            >
                <CardTitle tag="h5">
                    {character.name || 'Unknown'}
                </CardTitle>
                <CardText>
                    {character.status || 'Unknown'}
                </CardText>
                <CardText>
                    {character.species || 'Unknown'}
                </CardText>
            </Card>
        );
    }
    return (
        <>
            {renderCharacter()}
        </>
    );
}

export default Character;