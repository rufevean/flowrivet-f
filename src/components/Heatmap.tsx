import React from "react";
import { useSelector } from "react-redux";
import { HeatMapGrid } from "react-grid-heatmap";
import "../styles/userprofile.css";

const xLabels = new Array(53).fill().map((_, i) => `${i + 1}`);
const yLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",];

const App = () => {
    const issues = useSelector((state) => state.issues);
    const completedDates = issues.map((issue) => issue.completedDate);

    const data = new Array(yLabels.length)
        .fill(0)
        .map(() => new Array(xLabels.length).fill(0));

    completedDates.forEach((date) => {
        if (date) {
            const week = getWeekOfYear(date);
            const dayOfWeek = date.getDay();
            data[dayOfWeek][week]++;
        }
    });
    function getWeekOfYear(date) {
        const start = new Date(date.getFullYear(), 0, 1);
        const diff =
            date -
            start +
            (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
        const oneDay = 1000 * 60 * 60 * 24;
        const day = Math.floor(diff / oneDay);
        return Math.ceil(day / 7);
    }
    return (
        <div className="heat-map">
            <HeatMapGrid
                data={data}
                xLabels={xLabels}
                yLabels={yLabels}
                cellHeight="3rem"
            />
            ;
        </div>
    );
};

export default App;
