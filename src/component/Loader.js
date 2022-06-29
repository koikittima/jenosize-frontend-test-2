import React from 'react'
import { Modal } from 'react-bootstrap';
import GridLoader from 'react-spinners/GridLoader';

const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'white'
}

function Loader({ show }) {
    // console.log("loading", show);
    return (
        <Modal id="modal_loading" show={show}
            backdropClassName="loading-backdrop"
            onHide={() => null}
            animation={false}
            centered>
            <Modal.Body>
                <GridLoader
                    css={override}
                    size={15}
                    color={'#20639B'}
                    loading={show}
                />
            </Modal.Body>
            <style jsx global>{`
                #modal_loading {
                    z-index: 1600;
                }
                #modal_loading .modal-body {
                    border: none;
                    background-color: transparent;
                    display: flex;
                    justify-content: center;
                }
                  
                #modal_loading .modal-content{
                    background-color: transparent;
                    border: none;
                }
                `}</style>
        </Modal>
    )
}

export default Loader;
