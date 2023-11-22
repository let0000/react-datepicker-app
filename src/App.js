import "./App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import { FaCalendar } from "react-icons/fa";
import { forwardRef, useState } from "react";

const FormatDate = (selectedDate) => {
  if (!selectedDate) {
    return "선택중";
  }

  let year = selectedDate.getFullYear();
  let month = selectedDate.getMonth() + 1;
  let day = selectedDate.getDate();

  return `${year}-${month < 10 ? "0" : ""}${month}-${
    day < 10 ? "0" : ""
  }${day}`;
};

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div>
      <p>
        {FormatDate(startDate)} - {FormatDate(endDate)}
      </p>
      <button ref={ref} onClick={onClick}>
        <FaCalendar />
      </button>
    </div>
  ));

  return (
    <div>
      <DatePicker
        selectsRange
        startDate={startDate}
        endDate={endDate}
        onChange={(dates) => {
          const [start, end] = dates;
          setStartDate(start);
          setEndDate(end);
        }}
        customInput={<CustomInput />}
        popperPlacement="bottom-start"
        popperModifiers={{
          flip: {
            enabled: false,
          },
          preventOverflow: {
            enabled: true,
            boundariesElement: "viewport",
          },
        }}
      />
    </div>
  );
}

export default App;
