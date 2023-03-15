import './button.styles.scss'
const Button = ({ ClassNAME, value, type, onClick }) => {
    return (
        <button
            className={`button-container ${ClassNAME}`}
            type={type}
            onClick={onClick}
        >
            {value}
        </button>
    )
}

export default Button