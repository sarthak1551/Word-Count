import React, { Component } from "react";

export default class Mid extends Component {
  render() {
    return (
      <div className="attendance_mid">
        <div className="attendance_info">
          <p className="att_green">
            <strong>PR</strong>
          </p>
          <p>Present</p>
        </div>
        <div className="attendance_info">
          <p className="att_orange">
            <strong>HD</strong>
          </p>
          <p>Half Day</p>
        </div>
        <div className="attendance_info">
          <p className="att_red">
            <strong>AB</strong>
          </p>
          <p>Absent</p>
        </div>
        <div className="attendance_info">
          <p className="att_blue">
            <strong>CL</strong>
          </p>
          <p>Casual Leave</p>
        </div>
        <div className="attendance_info">
          <p className="att_purple">
            <strong>SL</strong>
          </p>
          <p>Sick Leave</p>
        </div>
        <div className="attendance_info">
          <p className="att_brown">
            <strong>EL</strong>
          </p>
          <p>Earn Leave</p>
        </div>
        <div className="attendance_info">
          <p className="att_blue">
            <strong>WO</strong>
          </p>
          <p>Weekly Off</p>
        </div>
        <div className="attendance_info">
          <p className="att_yellow">
            <strong>PE</strong>
          </p>
          <p>Penalty</p>
        </div>
        <div className="attendance_info">
          <p className="att_blue">
            <strong>PH</strong>
          </p>
          <p>Public Holiday</p>
        </div>
      </div>
    );
  }
}
