import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Kalendar() {
  const [startDate] = useState(new Date());
  const onChange = (dates: [Date | null, Date | null]) => {
    const [start] = dates;
  };
  return (
    <ReactDatePicker
      selected={startDate}
      onChange={onChange}
      selectsRange
      inline
    />
  );
}

export default Kalendar;
