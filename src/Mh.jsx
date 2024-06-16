import React, { useState } from "react";
import axios from "axios";


const Axios = () => {
  const [listamonstruo, setListamonstruo] = useState([]);
  const [monstruo, setMonstruo] = useState("");

  const agregarMonstruo = () => {
    setListamonstruo([...listamonstruo, monstruo])
  }
  const [listaMonstruos, setListaMonstruos] = useState([]);
  const url = "https://mhw-db.com/monsters";
  axios.get(url).then((response) => setListaMonstruos(response.data));

  return (
    <>
    <label htmlFor="monstruo">Monstruo</label>
      <input
        type="text"
        id="person"
        value={monstruo}
        onChange={(e) => setMonstruo(e.target.value)}
      />
      <button onClick={agregarMonstruo}>Agregar monstruo</button>

      <br />
      <br />
      <ul>
      {listamonstruo.map((m) => (

        <li>{m}</li>

          ))}
        {listaMonstruos.map((criatura) => (
          <li key={criatura.id}>{criatura.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Axios;
