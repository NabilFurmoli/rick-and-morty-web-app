/* Module Imports */
import React, { Component } from 'react';
import { Spinner } from 'reactstrap';

/* Component Imports */
import CharactersList from '../components/CharactersList';
import CharacterDetailsModal from '../components/CharacterDetailsModal.js';
import Pagination from '../components/Pagination';

/* Utils Imports */
import rockiMortiAPI from '../../utils/api/rockiMortiAPI';
import { CHARACTERS_FIRST_PAGE_URL } from '../../const';

/* CSS Imports */
import './Home.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currPageUrl: CHARACTERS_FIRST_PAGE_URL,
            pageInfo: null,
            characters: null,
            selectedCharacter: null,
            isDetailsOpen: false,
            isLoading: true,
            disablePrev: true,
            disableNext: false
        };
    }

    getPageInformation = async () => {
        try {
            let response = await rockiMortiAPI.getCharacters(this.state.currPageUrl);
            let { info, results } = response.data;
            if (results) {
                this.setState({ pageInfo: info, characters: results });
            }
            this.updatePaginationDisabelStatus()
        } catch (error) {
            alert(error.message + '\n' + error.response.data.error);
        } finally {
            this.setState({ isLoading: false })
        }
    }

    updatePaginationDisabelStatus = () => {
        let pageInfo = this.state.pageInfo;

        // Update the Prev Button disable status
        if (pageInfo.prev == null) {
            this.setState({ disablePrev: true })
        } else {
            this.setState({ disablePrev: false })
        }

        // Update the Next Button disable status
        if (pageInfo.next == null) {
            this.setState({ disableNext: true })
        } else {
            this.setState({ disableNext: false })
        }
    }

    componentDidMount = () => {
        this.getPageInformation();
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.currPageUrl !== this.state.currPageUrl) {
            this.getPageInformation();
        }
    }

    detailsModalToggle = () => {
        this.setState({ isDetailsOpen: !this.state.isDetailsOpen })
    }

    onClickCharacter = (id) => {
        if (id) {
            let filteredCharacters = this.state.characters.filter((character) => {
                return character.id === id;
            })
            let character = filteredCharacters[0];
            if (character) {
                this.setState({ selectedCharacter: character, isDetailsOpen: true })
            }
        }
    }

    onClickPrevPage = () => {
        let pageInfo = this.state.pageInfo;
        if (pageInfo.prev) {
            this.setState({ currPageUrl: pageInfo.prev })
        }
    }

    onClickNextPage = () => {
        let pageInfo = this.state.pageInfo;
        if (pageInfo.next) {
            this.setState({ currPageUrl: pageInfo.next })
        }
    }

    render() {

        const content = <>
            <CharactersList characters={this.state.characters} onClickCharacter={this.onClickCharacter} />
            <Pagination pageCount={parsePageNumber(this.state.currPageUrl)} disablePrev={this.state.disablePrev} disableNext={this.state.disableNext} onClickPrevPage={this.onClickPrevPage} onClickNextPage={this.onClickNextPage} />
            {this.state.isDetailsOpen && <CharacterDetailsModal modalToggle={this.detailsModalToggle} character={this.state.selectedCharacter} />}
        </>

        const loader = <div>
            <Spinner
                color="primary"
                type="grow"
            >
                Loading...
            </Spinner>
        </div>;

        return (
            <div className='d-flex justify-center align-center flex-col'>
                {this.state.isLoading ? loader : content}
            </div>
        );
    }
}

/* Helper Functions */ 
const parsePageNumber = (url) => {
    let arr = url.split('=');
    if (isNaN(arr[1]) === false) {
        return arr[1]
    }

    return 'Unknown';
}

export default Home;