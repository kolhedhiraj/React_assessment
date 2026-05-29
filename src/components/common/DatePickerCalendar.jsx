import { useState } from "react";

export default function DatePickerCalendar({
  onSelect,
  onClose,
}) {
  const [month, setMonth] = useState("January");
  const [year, setYear] = useState(2007);
  const [selectedDate, setSelectedDate] = useState(null);

  const days = [
    26, 27, 28, 29, 30,
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23,
    24, 25, 26, 27, 28, 29, 30,
    31, 1, 2, 3, 4, 5, 6
  ];

  const handleDateClick = (day, idx) => {
    const isPrevMonth = idx < 5;
    const isNextMonth = idx > 35;

    if (isPrevMonth || isNextMonth) return;

    setSelectedDate(day);

    // send selected date to parent
    onSelect({
      day,
      month,
      year,
    });

    // close popup
    onClose();
  };

  return (
<div className="calendar-main min-h-screen flex items-center justify-center bg-gray-100">
      {/* Card */}
    <div className="calendar-overlay">
      <div className="calendar-card">

        {/* Title */}
        <h2 className="text-center text-xl font-semibold text-slate-700 mb-8">
          Select date
        </h2>

        {/* Month & Year */}
        <div className="month-year flex items-center justify-center gap-10 mb-6">
          <div className="relative">
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="appearance-none bg-transparent text-slate-700 text-lg pr-6 focus:outline-none cursor-pointer"
            >
              {[
                "January","February","March","April","May","June",
                "July","August","September","October","November","December"
              ].map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

          <div className="relative">
           <select
  value={year}
  onChange={(e) => setYear(Number(e.target.value))}
  className="appearance-none bg-transparent text-slate-700 text-lg pr-6 focus:outline-none cursor-pointer"
>
  {Array.from(
    { length: new Date().getFullYear() - 1935 + 1 },
    (_, i) => 1935 + i
  ).map((y) => (
    <option key={y} value={y}>
      {y}
    </option>
  ))}
</select>
          </div>
        </div>

        {/* Week Days */}
        <div className="grid grid-cols-7 text-center text-gray-400 text-sm mb-3 days-main">
          {['Mo','Tu','We','Th','Fr','Sa','Su'].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="calendar-grid grid grid-cols-7 gap-2 text-center">
          {days.map((day, idx) => {

            const isPrevMonth = idx < 5;
            const isNextMonth = idx > 35;
            const isCurrentMonth = !isPrevMonth && !isNextMonth;

            const isSelected =
              selectedDate === day && isCurrentMonth;

            return (
              <button
                key={idx}
                onClick={() => handleDateClick(day, idx)}
                className={`
                  calendar-day
                  ${isPrevMonth ? "prev-month" : ""}
                  ${isNextMonth ? "next-month" : ""}
                  ${isCurrentMonth ? "current-month" : ""}
                  ${isSelected ? "selected" : ""}
                `}
              >
                {day}
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Done Button */}
        <button
          onClick={onClose}
          className="done-btn w-full bg-red-400 text-white py-3 rounded-lg text-lg font-medium hover:bg-red-500 transition"
        >
          Done
        </button>
      </div>
    </div>
    </div>
  );
} 