import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeValue = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmitEvent = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <=1) return;

    onNewCategory(inputValue.trim())
    setInputValue('')
  };
  return (
    <form onSubmit={onSubmitEvent}>
      <input
        type="text"
        placeholder="buscar gif"
        value={inputValue}
        onChange={onChangeValue}
      />
    </form>
  );
};
