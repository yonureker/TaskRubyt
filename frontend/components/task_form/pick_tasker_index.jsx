import React from "react";
import TaskerIndexItem from "./pick_tasker_index_item";
import NavBar from '../../components/navbar/navbar' ;

class PickTaskerIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllUsers();
    window.scrollTo(0, 0);
  }

  render() {
    const taskers = this.props.taskers.map(tasker => {
      return <TaskerIndexItem key={tasker.id} tasker={tasker} />;
    });

    return (
      <div className="pick-tasker-form">
        <NavBar />
        <div className="tasker-form-main-container">
          <div className="tasker-filter-container">
            <div className="trust-safety-container">
              <div className="trust-safety-icon">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzNCIgdmlld0JveD0iMCAwIDMyIDM0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzM2QjVCQiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTYuMTc4IDMyLjY0NGExLjAzOCAxLjAzOCAwIDAgMS0uMjU4LS4wMzNjLS43NjItLjI1Ny0xLjU2My0uNjUyLTIuNC0xLjE4NGEyMC4zNzcgMjAuMzc3IDAgMCAxLTIuNTIyLTEuOTEgMjcuNDUzIDI3LjQ1MyAwIDAgMS0yLjQ5LTIuNTA1IDMxLjAzMyAzMS4wMzMgMCAwIDEtMi4zMDQtMi45NzMgMzguNjc0IDM4LjY3NCAwIDAgMS0xLjk4Mi0zLjMyNyAzMC41MjEgMzAuNTIxIDAgMCAxLTEuODQ1LTQuMjM4IDM0LjY0IDM0LjY0IDAgMCAxLTEuMzUzLTUuMTA4Qy42NzQgOS41MjQuNSA3LjU0NC41IDUuNDI4YzAtLjIyNS4wOC0uNDE5LjI0Mi0uNThhLjc5MS43OTEgMCAwIDEgLjU4LS4yNDJjMS4xNiAwIDIuNDQ5LS4xNzQgMy44NjctLjUyM2E0MS4yMyA0MS4yMyAwIDAgMCA3Ljg5Ni0yLjg1MkMxNC4yMjIuNjc3IDE1LjA5OC4xOTcgMTUuNzEtLjIxMWEuNzkuNzkgMCAwIDEgLjQ2LS4xNDUuNzkuNzkgMCAwIDEgLjQ1OC4xNDVjLjYxMy40MDggMS40OS44ODggMi42MzUgMS40NDJBNDIuMDg2IDQyLjA4NiAwIDAgMCAyMy4wMSAyLjgxYzEuMzU0LjUgMi43MzcuOTI0IDQuMTUgMS4yNzMgMS40MTIuMzQ5IDIuNjk4LjUyMyAzLjg1OS41MjNhLjgxLjgxIDAgMCAxIC41OTYuMjQyLjc5MS43OTEgMCAwIDEgLjI0MS41OGMwIDIuMTE2LS4xNzcgNC4wOTYtLjUzMSA1LjkzOGEzNi4wMjYgMzYuMDI2IDAgMCAxLTEuMzU0IDUuMTA4IDI5Ljg5NiAyOS44OTYgMCAwIDEtMS44MzcgNC4yMzggMzYgMzYgMCAwIDEtMS45OTggMy4zMjcgMjkuMjYyIDI5LjI2MiAwIDAgMS0yLjI4OCAyLjk3MyAyNy40NTMgMjcuNDUzIDAgMCAxLTIuNDkgMi41MDYgMjAuMzc3IDIwLjM3NyAwIDAgMS0yLjUyMSAxLjkwOWMtLjgzOC41MzItMS42MzguOTI3LTIuNDAxIDEuMTg0YTEuMDg3IDEuMDg3IDAgMCAxLS4yNTguMDMzek0yLjE2IDYuMjE4Yy4wNDMgMS45MTIuMjM5IDMuNzAzLjU4OCA1LjM3NGEzMy40NSAzMy40NSAwIDAgMCAxLjI5NyA0LjYyNCAyOS45MTMgMjkuOTEzIDAgMCAwIDEuNyAzLjg1MSAzMS40MzEgMzEuNDMxIDAgMCAwIDEuODI5IDMuMDM3IDI3LjgyOSAyNy44MjkgMCAwIDAgNC41NiA1LjIxM2MuNzUyLjY2IDEuNDc0IDEuMjExIDIuMTY3IDEuNjUyLjY5My40NCAxLjMxOS43NjggMS44NzcuOTgzLjU1OS0uMjE1IDEuMTg1LS41NDMgMS44NzctLjk4My42OTMtLjQ0IDEuNDE2LS45OTEgMi4xNjgtMS42NTJhMjcuMjAzIDI3LjIwMyAwIDAgMCAyLjI5Ni0yLjI5NiAyNi4zODUgMjYuMzg1IDAgMCAwIDIuMjQ4LTIuOTE3IDMyLjUwNSAzMi41MDUgMCAwIDAgMS44MzctMy4wMzcgMjkuMTg3IDI5LjE4NyAwIDAgMCAxLjcwOC0zLjg1IDMyLjczMyAzMi43MzMgMCAwIDAgMS4yODktNC42MjVjLjM0My0xLjY3LjU0Mi0zLjQ2Mi41OTYtNS4zNzRhMTguNiAxOC42IDAgMCAxLTIuMDYzLS4yNSAyNS4zNCAyNS4zNCAwIDAgMS0yLjA1NC0uNDUxIDM2LjM0NSAzNi4zNDUgMCAwIDEtMS45NS0uNTcyIDU4Ljg0MiA1OC44NDIgMCAwIDEtMS43NDgtLjU5NmMtLjU4LS4yMjYtMS4xNi0uNDYtMS43NC0uNzAxYTUwLjM1NyA1MC4zNTcgMCAwIDEtMS42NzYtLjczMyAzMy40NCAzMy40NCAwIDAgMS0xLjUxNS0uNzQyIDE4LjU0MSAxOC41NDEgMCAwIDEtMS4yNzMtLjcyNWMtLjM3Ni4yMzctLjgwMy40NzgtMS4yOC43MjUtLjQ3OS4yNDctLjk4NC40OTQtMS41MTUuNzQyLS41MzIuMjQ3LTEuMDg4LjQ5MS0xLjY2OC43MzMtLjU4LjI0MS0xLjE2Ni40NzUtMS43NTcuNy0uNTI2LjE5NC0xLjEwMy4zOTMtMS43MzIuNTk3LS42MjguMjA0LTEuMjguMzk1LTEuOTU3LjU3Mi0uNjc3LjE3Ny0xLjM2Mi4zMjctMi4wNTUuNDUxYTE4LjMxIDE4LjMxIDAgMCAxLTIuMDU0LjI1em0xMi4zNTkgMTQuMDVhLjg2Ljg2IDAgMCAxLS4yOTktLjA1Ni43OC43OCAwIDAgMS0uMjgyLS4xODVsLTMuMzAzLTMuMjg3YS44LjggMCAwIDEtLjI0MS0uNTg4LjguOCAwIDAgMSAuMjQxLS41ODkuOC44IDAgMCAxIC41ODgtLjI0MS44LjggMCAwIDEgLjU4OS4yNDFsMi43MDcgMi43MjQgNy42Ny03LjY3YS44LjggMCAwIDEgLjU4OC0uMjQyLjguOCAwIDAgMSAuNTg4LjI0Mi43OTEuNzkxIDAgMCAxIC4yNDEuNThjMCAuMjI1LS4wOC40MTktLjI0MS41OGwtOC4yNSA4LjI1YS43OC43OCAwIDAgMS0uMjgyLjE4NS45MDIuOTAyIDAgMCAxLS4zMTQuMDU3eiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjI0IiBjeT0iMjciIHI9IjYiIGZpbGw9IiNGOUMzMzkiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yMi41MDMgMjQuODU3YTEuNSAxLjUgMCAwIDAtMS4zODQuODk0Yy0uMDguMTc4LS4xMTkuMzY4LS4xMTkuNTcgMCAuMjYzLjA0Ny41MTcuMTQxLjc2NC4wOTQuMjQ3LjIxNS40ODIuMzYyLjcwNS4xNDcuMjI0LjMxLjQzMi40OTEuNjI1LjE4LjE5My4zNTguMzY1LjUzMy41MTguMTU0LjE0LjMwNy4yNjcuNDYuMzgyYTExLjMyIDExLjMyIDAgMCAwIDEuMDE1LjY4NWwuMjM2LS4xNDZhMTEuMjgxIDExLjI4MSAwIDAgMCAuNzc3LS41MzkgNy44NjMgNy44NjMgMCAwIDAgLjk5Mi0uOWMuMTgyLS4xOTMuMzQ2LS40MDEuNDkzLS42MjUuMTQ3LS4yMjMuMjY3LS40NTguMzYtLjcwNS4wOTMtLjI0Ny4xNC0uNTAxLjE0LS43NjQgMC0uMjAyLS4wNC0uMzkyLS4xMTctLjU3YTEuNDU0IDEuNDU0IDAgMCAwLS4zMjItLjQ2NiAxLjUzMyAxLjUzMyAwIDAgMC0xLjA2LS40MjhjLS4xNSAwLS4yOTYuMDI3LS40NC4wOGExLjY3IDEuNjcgMCAwIDAtLjcwOC41MWMtLjA4Ny4xMS0uMTUuMjE4LS4xODYuMzI2YS4xNy4xNyAwIDAgMS0uMDY0LjA4NC4xNzUuMTc1IDAgMCAxLS4yMDcgMCAuMTcuMTcgMCAwIDEtLjA2My0uMDg0IDEuMTA1IDEuMTA1IDAgMCAwLS4xODYtLjMyNyAxLjYwMiAxLjYwMiAwIDAgMC0uNzA1LS41MDggMS4yNDIgMS4yNDIgMCAwIDAtLjQ0LS4wOHoiLz4KICAgIDwvZz4KPC9zdmc+Cg==" />
              </div>
              
              <div className="trust-safety-text">
              Always have peace of mind. All Taskers undergo
              ID and criminal background checks.
              </div>
            </div>



            {/* <div className="calendar-container">
              <div className="calendar">
                Select date
                <br />
                <br />
                <input type="date" onChange={this.calendarChange()} />
              </div>

              <div className="calendar">
                Select time
                <br />
                <br />
                <input type="time" />
              </div>
            </div> */}
          </div>

          <div className="tasker-list-container">
            <ul className="alltaskers">{taskers}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PickTaskerIndex;
