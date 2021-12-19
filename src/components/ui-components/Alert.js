const Alert = (props) => {
    return(
        <div class={`alert ${props.alertType}`} role="alert">
        {props.alertMessage}
        </div>
    );
}

export default Alert;