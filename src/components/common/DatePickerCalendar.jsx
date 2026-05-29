import { useState } from "react";

export default function DatePickerCalendar({ onSelect, onClose }) {
  // Map month names to their zero-based numerical indexes for native Date constructor use
  const monthMap = {
    January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
    July: 6, August: 7, September: 8, October: 9, November: 10, December: 11
  };

  const [month, setMonth] = useState("January");
  const [year, setYear] = useState(2007);
  const [selectedDate, setSelectedDate] = useState(null);

  // ⚡ DYNAMIC GENERATION LOGIC: Calculates calendar grid padding and values on the fly
  const generateCalendarDays = () => {
    const monthIndex = monthMap[month];
    
    // 1. Find the day of the week the current month starts on (0 = Sunday, 1 = Monday, etc.)
    const firstDayIndex = new Date(year, monthIndex, 1).getDay();
    
    // Convert Sunday (0) to index 6, Monday (1) to index 0 to align with your ['Mo', 'Tu'...] row format
    const startOffset = firstDayIndex === 0 ? 6 : firstDayIndex - 1;

    // 2. Get total days in the current month
    const totalDaysInMonth = new Date(year, monthIndex + 1, 0).getDate();

    // 3. Get total days in the previous month (to fill preceding grid slots)
    const totalDaysInPrevMonth = new Date(year, monthIndex, 0).getDate();

    const gridCells = [];

    // Add trailing padding days from the previous month
    for (let i = startOffset; i > 0; i--) {
      gridCells.push({
        day: totalDaysInPrevMonth - i + 1,
        type: "prev-month"
      });
    }

    // Add real active days for the selected current month
    for (let i = 1; i <= totalDaysInMonth; i++) {
      gridCells.push({
        day: i,
        type: "current-month"
      });
    }

    // Add leading padding days from the next month to neatly fill out the remaining grid grid matrix rows
    const totalGridSlots = 42; // standard 6-row layout grid block
    const remainingSlots = totalGridSlots - gridCells.length;
    for (let i = 1; i <= remainingSlots; i++) {
      gridCells.push({
        day: i,
        type: "next-month"
      });
    }

    return gridCells;
  };

  const calendarDays = generateCalendarDays();

  const handleDateClick = (dayObj) => {
    // Only allow selecting dates from the active month
    if (dayObj.type !== "current-month") return;

    setSelectedDate(dayObj.day);

    // Send selection coordinates back up to parenting form
    onSelect({
      day: dayObj.day,
      month,
      year,
    });

    onClose();
  };

  return (
    <div className="calendar-main min-h-screen flex items-center justify-center bg-gray-100">
      <div className="calendar-overlay">
        <div className="calendar-card">

          <h2 className="text-center text-xl font-semibold text-slate-700 mb-8">
            Select date
          </h2>

          {/* Month & Year Selectors */}
          <div className="month-year flex items-center justify-center gap-10 mb-6">
            <div className="relative">
              <select
                value={month}
                onChange={(e) => {
                  setMonth(e.target.value);
                  setSelectedDate(null); // Clear active selected circle focus when flipping context
                }}
                className="appearance-none bg-transparent text-slate-700 text-lg pr-6 focus:outline-none cursor-pointer"
              >
                {Object.keys(monthMap).map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            <div className="relative">
              <select
                value={year}
                onChange={(e) => {
                  setYear(Number(e.target.value));
                  setSelectedDate(null);
                }}
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

          {/* Week Days Header Row */}
          <div className="grid grid-cols-7 text-center text-gray-400 text-sm mb-3 days-main">
            {['Mo','Tu','We','Th','Fr','Sa','Su'].map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          {/* Dynamic Render Grid */}
          <div className="calendar-grid grid grid-cols-7 gap-2 text-center">
            {calendarDays.map((cell, idx) => {
              const isCurrentMonth = cell.type === "current-month";
              const isSelected = selectedDate === cell.day && isCurrentMonth;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleDateClick(cell)}
                  className={`
                    calendar-day
                    ${cell.type === "prev-month" ? "prev-month" : ""}
                    ${cell.type === "next-month" ? "next-month" : ""}
                    ${isCurrentMonth ? "current-month" : ""}
                    ${isSelected ? "selected" : ""}
                  `}
                >
                  {cell.day}
                </button>
              );
            })}
          </div>

          <div className="divider"></div>

          <button
            type="button"
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
