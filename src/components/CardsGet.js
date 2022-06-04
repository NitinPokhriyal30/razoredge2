import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import Axios from "axios";

export default function GetCard(props) {
  const [name1, setName] = useState(props.name);
  const [age1, setAge] = useState(props.age);
  const [city1, setCity] = useState(props.city);
  const [country1, setCountry] = useState(props.country);
  const [update, setupdate] = useState(false);

  // const props = {name, age, city, country};

  const deleteData = () => {
    Axios.post("http://localhost:5000/delete", { _id: props.id }).then((res) =>
      window.location.reload()
    );
  };

  const updateData = () => {
    const data = {
      name: name1,
      age: age1,
      city: city1,
      country: country1,
      _id: props.id,
    };
    Axios.post("http://localhost:5000/update", data).then((res) =>
      window.location.reload()
    );
  };

  return (
    <div className="col col-md-4">
      <Card sx={{ minWidth: 275 }}>
        <p>
          Name:
          {update ? (
            <input value={name1} onChange={(e) => setName(e.target.value)} />
          ) : (
            name1
          )}
        </p>
        <p>
          Age:
          {update ? (
            <input value={age1} onChange={(e) => setAge(e.target.value)} />
          ) : (
            age1
          )}
        </p>
        <p>
          City:
          {update ? (
            <input value={city1} onChange={(e) => setCity(e.target.value)} />
          ) : (
            city1
          )}
        </p>
        <p>
          Country:
          {update ? (
            <input
              value={country1}
              onChange={(e) => setCountry(e.target.value)}
            />
          ) : (
            country1
          )}
        </p>
        {update ? <button onClick={() => updateData()}>Update</button> : ""}
        <button onClick={() => setupdate(true)}>Edit</button>
        <button onClick={() => deleteData()}>Delete</button>
      </Card>
    </div>
  );
}
