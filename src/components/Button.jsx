// eslint-disable-next-line react/prop-types
function Button({ text, onClick = () => {}, ...props }) {
  return (
    <div className='button'>
      <button {...props} onClick={onClick}>
        {text}
      </button>
    </div>
  )
}

export default Button
