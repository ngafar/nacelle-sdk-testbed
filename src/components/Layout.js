import { useEffect, useState } from "react";
import Response from "./Response";

function Layout(props) {
  const [inputs, setInputs] = useState({});
  const [jsonResponse, setJsonResponse] = useState({
    msg: "waiting on credentials",
  });

  return (
    <>
      <section>
        <h2>{props.title}</h2>
        {props.note ? <p>{props.note}</p> : <></>}
      </section>

      <section>
        {props.fields.map((field, i) => {
          return (
            <section key={i}>
              <label htmlFor={field}>{field}</label>
              <input
                type="text"
                id={field}
                name={field}
                onChange={(e) =>
                  setInputs((prevState) => ({
                    ...prevState,
                    [field]: e.target.value,
                  }))
                }
              />
            </section> // CHANGE THIS SECTION TO A DIV & WRAP .MAP IN SECTION
          );
        })}

        <button
          onClick={() =>
            props.requestFunc(inputs).then((resp) => {
              setJsonResponse(resp);
            })
          }
        >
          Submit
        </button>
      </section>

      <Response jsonResponse={jsonResponse}></Response>
    </>
  );
}

export default Layout;
