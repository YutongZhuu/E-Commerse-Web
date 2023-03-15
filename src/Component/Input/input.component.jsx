import '../Input/form-input.styles.scss'
const Input = ({ label, type, name, value, onChange }) => {
    return (
        <div className="group">
               <input
                    className='form-input'
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange} />
                <label className={`${value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
 

        </div>

    )
}

export default Input