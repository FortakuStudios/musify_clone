import { Col, Stack } from "react-bootstrap";
import { useState } from "react";

const initialOptions = [
  { label: "Comments", checked: true },
  { label: "Likes", checked: true },
  { label: "Review", checked: true },
  { label: "Mentions", checked: true },
  { label: "Purchases", checked: true },
  { label: "Message", checked: true },
];

function FilterPart() {
  const [options, setOptions] = useState(initialOptions);

  const handleCheckboxChange = (index) => {
    const updatedOptions = options.map((option, i) =>
      i === index ? { ...option, checked: !option.checked } : option
    );
    setOptions(updatedOptions);
  };

  const handleSelectAll = () => {
    const updatedOptions = options.map((option) => ({
      ...option,
      checked: true,
    }));
    setOptions(updatedOptions);
  };

  const handleUnselectAll = () => {
    const updatedOptions = options.map((option) => ({
      ...option,
      checked: false,
    }));
    setOptions(updatedOptions);
  };

  return (
    <Col md={3}>
      <div className="border border-dark rounded-5 p-4">
        <div className="mb-5">
          <h5>Filter</h5>
        </div>

        <Stack direction="vertical">
          {options.map((option, index) => (
            <div
              key={index}
              className="d-flex justify-content-between align-items-center my-2"
            >
              <h6>
                <strong>{option.label}</strong>
              </h6>
              <input
                type="checkbox"
                checked={option.checked}
                onChange={() => handleCheckboxChange(index)}
                className="form-check-input bg-primary"
              />
            </div>
          ))}
        </Stack>
        <div className="d-flex justify-content-between mt-4">
          <button
            className="btn btn-primary rounded-pill text-white"
            onClick={handleSelectAll}
          >
            Select All
          </button>
          <button
            className="btn btn-primary rounded-pill text-white"
            onClick={handleUnselectAll}
          >
            Unselect All
          </button>
        </div>
      </div>
    </Col>
  );
}

export default FilterPart;
