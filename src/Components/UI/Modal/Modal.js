import classes from './Modal.module.css';
import ReactDOM from "react-dom";

const BackDrop = () => <div className={classes.backdrop}/>

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlay')    ;

const Modal = props => {
    return <>
        {ReactDOM.createPortal(<BackDrop/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
}

export default Modal;