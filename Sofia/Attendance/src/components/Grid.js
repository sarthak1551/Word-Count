import React, { Component } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { AttendanceData } from "../AttendanceData";
import moment from "moment";

export default class Grid extends Component {
  state = {
    data: [],
    rows: [],
  };
  componentDidMount = () => {
    let data = [];
    let rows = [];
    Object.keys(AttendanceData).forEach((employeeID, i) => {
      // console.log(employeeID);
      Object.keys(AttendanceData[employeeID]).forEach((dateString) => {
        if (moment(dateString).isValid()) {
          let obj = AttendanceData[employeeID][dateString];
          // if (i === 0) console.log(dateString);
          data.push({
            resultInitials: obj.resultInitials ? obj.resultInitials : "-",
            color: obj.color ? obj.color : "#000",
            date: dateString,
            name: AttendanceData[employeeID].firstName + AttendanceData[employeeID].lastName,
          });
        }
      });
    });
    //number of users
    for (let i = 0; i < 5; i++) {
      let obj = {};
      obj.name = data[i * 6].name;
      obj.id = i;
      //number of days
      for (let j = i * 6; j < i * 6 + 6; j++) {
        obj[data[j].date] = data[j].resultInitials;
      }
      rows[i] = obj;
    }
    this.setState({ rows });
  };
  render() {
    return (
      <div>
        <DataGrid
          rows={this.state.rows}
          columns={columns}
          autoHeight
          getCellClassName={(params) => {
            switch (params.value) {
              case "PR":
                return "att_green";
              case "HD":
                return "att_orange";
              case "AB":
                return "att_red";
              case "CL":
                return "att_blue";
              case "SL":
                return "att_purple";
              case "EL":
                return "att_brown";
              case "WO":
                return "att_blue";
              case "PE":
                return "att_yellow";
              case "PH":
                return "att_blue";

              default:
                return "";
            }
          }}
        />
      </div>
    );
  }
}

const columns = [
  { field: "name", headerName: "Name", width: 180, editable: true },
  {
    field: "2021-05-17",
    headerName: "17-05-2021",
    width: 180,
    editable: true,
    renderEditCell: (params) => Select(params),
  },
  {
    field: "2021-05-18",
    headerName: "18-05-2021",
    editable: true,
    width: 180,
    renderEditCell: (params) => Select(params),
  },
  {
    field: "2021-05-19",
    headerName: "19-05-2021",
    editable: true,
    width: 180,
    renderEditCell: (params) => Select(params),
  },
  {
    field: "2021-05-20",
    headerName: "20-05-2021",
    editable: true,
    width: 180,
    renderEditCell: (params) => Select(params),
  },
  {
    field: "2021-05-21",
    headerName: "21-05-2021",
    editable: true,
    width: 180,
    renderEditCell: (params) => Select(params),
  },
  {
    field: "2021-05-22",
    headerName: "22-05-2021",
    editable: true,
    width: 180,
    renderEditCell: (params) => Select(params),
  },
];
const Select = (params) => (
  <select defaultValue={params.value} className="att_select">
    <option value="PR">PR</option>
    <option value="HD">HD</option>
    <option value="AB">AB</option>
    <option value="CL">CL</option>
    <option value="SL">SL</option>
    <option value="EL">EL</option>
    <option value="WO">WO</option>
    <option value="PE">PE</option>
    <option value="PH">PH</option>
  </select>
);
