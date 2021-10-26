import React from "react";
// import Classes from "../Styles/bg.module.css";
export default function Settings() {
  return (
    <React.Fragment>
      <h2>React Settings Form</h2>
      <form>
        <table className="form-table" role="presentation">
          <tbody>
            <tr>
              <th scope="row">
                <label htmlFor="firstname">Firstname</label>
              </th>
              <td>
                <input
                  id="firstname"
                  name="firstname"
                  className="regular-text"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <label htmlFor="lastname">Lastname</label>
              </th>
              <td>
                <input id="lastname" name="lastname" className="regular-text" />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <label htmlFor="email">Email</label>
              </th>
              <td>
                <input id="email" name="email" className="regular-text" />
              </td>
            </tr>
          </tbody>
        </table>
        <p className="submit">
          <button type="submit" className="button button-primary">
            Submit
          </button>
        </p>
      </form>
    </React.Fragment>
  );
}
