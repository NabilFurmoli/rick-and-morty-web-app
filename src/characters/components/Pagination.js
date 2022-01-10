/* Module Imports */
import React from "react";
import { Card, CardBody, CardText, Button } from 'reactstrap';

/* CSS Imports */
import './Pagination.css';

const Pagination = ({pageCount, disablePrev, disableNext, onClickPrevPage, onClickNextPage }) => {

    return (
        <>
            <Card
            className="pagination-card"
            >
                <CardBody className="pagination-cont">
                    <Button outline={true} disabled={disablePrev} color="primary" onClick={onClickPrevPage}>
                        Prev
                    </Button>
                    <CardText>
                        Page {pageCount}
                    </CardText>
                    <Button outline={true} disabled={disableNext} color="primary" onClick={onClickNextPage}>
                        Next
                    </Button>
                </CardBody>
            </Card>
        </>
    );
}

export default Pagination;