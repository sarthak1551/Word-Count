import React, { Component } from "react";
import TodayIcon from "@material-ui/icons/Today";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default class DatePicker extends Component {
  state = {
    range: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
    show: false,
  };
  subDays = (days) => {
    var date = new Date();
    date.setDate(date.getDate() - days);
    return date;
  };

  handleSelect = (ranges) => {
    this.setState({ range: ranges.selection });
  };
  render() {
    return (
      <div className="attendance_datepicker_root">
        <TodayIcon style={{ color: "#808080" }} />
        <p>24/06/2021 - 29/06/2021</p>
        <ArrowDropDownIcon style={{ color: "#0000008a" }} />
        <div className="attendance_datepicker">
          <DateRangePicker
            ranges={[this.state.range]}
            onChange={(r) => this.handleSelect(r)}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            direction="horizontal"
          />
        </div>
      </div>
    );
  }
}
