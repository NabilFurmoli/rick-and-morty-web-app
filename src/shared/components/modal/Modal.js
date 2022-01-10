/* Module Imports */
import React from 'react';
import { Modal as ReactrapModal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';

const Modal = (props) => {
    return (
        <>
            <ReactrapModal
                centered
                size={props.size || 'lg'}
                toggle={props.toggle}
                isOpen={props.isOpen}
            >
                <ModalHeader toggle={props.toggle}>
                    {props.title || 'Details'}
                </ModalHeader>
                <ModalBody>
                    {props.children}
                </ModalBody>
                <ModalFooter>
                    <Button onClick={props.toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </ReactrapModal>
        </>
    );

}

export default Modal;