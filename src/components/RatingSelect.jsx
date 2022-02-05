import PropTypes from "prop-types";
import { useState } from "react";

const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(10);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };

  return (
    <ul className="rating">
      <li>
        <input type="radio" name="rating" id="num1" checked={selected === 1} value="1" onChange={handleChange} />
        <label htmlFor="num1">1</label>
      </li>
      <li>
        <input type="radio" name="rating" id="num2" checked={selected === 2} value="2" onChange={handleChange} />
        <label htmlFor="num2">2</label>
      </li>
      <li>
        <input type="radio" name="rating" id="num3" checked={selected === 3} value="3" onChange={handleChange} />
        <label htmlFor="num3">3</label>
      </li>
      <li>
        <input type="radio" name="rating" id="num4" checked={selected === 4} value="4" onChange={handleChange} />
        <label htmlFor="num4">4</label>
      </li>
      <li>
        <input type="radio" name="rating" id="num5" checked={selected === 5} value="5" onChange={handleChange} />
        <label htmlFor="num5">5</label>
      </li>
      <li>
        <input type="radio" name="rating" id="num6" checked={selected === 6} value="6" onChange={handleChange} />
        <label htmlFor="num6">6</label>
      </li>
      <li>
        <input type="radio" name="rating" id="num7" checked={selected === 7} value="7" onChange={handleChange} />
        <label htmlFor="num7">7</label>
      </li>
      <li>
        <input type="radio" name="rating" id="num8" checked={selected === 8} value="8" onChange={handleChange} />
        <label htmlFor="num8">8</label>
      </li>
      <li>
        <input type="radio" name="rating" id="num9" checked={selected === 9} value="9" onChange={handleChange} />
        <label htmlFor="num9">9</label>
      </li>
      <li>
        <input type="radio" name="rating" id="num10" checked={selected === 10} value="10" onChange={handleChange} />
        <label htmlFor="num10">10</label>
      </li>
    </ul>
  );
};

RatingSelect.propTypes = {
  select: PropTypes.func.isRequired,
};

export default RatingSelect;
