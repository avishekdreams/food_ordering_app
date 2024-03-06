import "./style.css";

const ExtraIngredient = ({ ingredient, onSelect, isChecked }) => {
  return (
    <div className="extraIngradient">
      <label className="container">
        {ingredient}
        <input type="checkbox" checked={isChecked} onChange={() => onSelect(ingredient)} />
        <span className="checkmark"></span>
      </label>
    </div>
  )
}

export default ExtraIngredient;