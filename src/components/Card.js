import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import axios from "axios";

export default function BasicCard() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const postdata = () => {
    const data = {
      name: name,
      age: age,
      city: city,
      country: country,
    };
    axios.post("http://localhost:5000/create", data).then((res) => {
      window.location.reload();
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col col-md-4">
          <Card sx={{ minWidth: 275 }}>
            <p>
              Name:
              <input value={name} onChange={(e) => setName(e.target.value)} />
            </p>
            <p>
              Age:
              <input value={age} onChange={(e) => setAge(e.target.value)} />
            </p>
            <p>
              City:
              <input value={city} onChange={(e) => setCity(e.target.value)} />
            </p>
            <p>
              Country:
              <input
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </p>
            <button onClick={() => postdata()}>Submit</button>
          </Card>
        </div>
        <div className="col col-md-4"></div>
        <div className="col col-md-4"></div>
      </div>
    </div>
  );
}
