import classes from './Modal.module.css';
import ReactDOM from "react-dom";

const BackDrop = props => <div className={classes.backdrop} onClick={props.onClose}/>

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlay')    ;

const Modal = props => {
    return <>
        {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
}

export default Modal;