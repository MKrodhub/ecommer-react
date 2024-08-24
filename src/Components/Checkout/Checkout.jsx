import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import FormularioCheckout from "./FormularioCheckout";
import db from "../../db/db.js";
import validateForm from "../../utils/validacionFormulario.js";
import { toast } from "react-toastify";
import "./checkout.css";

const Checkout = () => {
  const { carrito, precioTotal } = useContext(CartContext);

  const [idOrden, setIdOrden] = useState(null);
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    confirmarEmail: "",
  });

  const handleChangeInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    const orden = {
      comprador: { ...datosForm },
      productos: [...carrito],
      fecha: Timestamp.fromDate(new Date()),
      total: precioTotal(),
    };

    const response = await validateForm(datosForm);

    if (response.status === "success") {
      sendOrder(orden);
    } else {
      toast.warning(response.message);
    }


  };

  const sendOrder = async (orden) => {
    try {
      const ordenesRef = collection(db, "ordenes");
      const ordenDB = await addDoc(ordenesRef, orden);
      setIdOrden(ordenDB.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="checkout">
      {idOrden ? (
        <div className="order-completed">
          <h2>Orden completada correctamente.</h2>
          <p>Guarde el id de su compra: {idOrden}</p>
        </div>
      ) : (
        <FormularioCheckout
          datosForm={datosForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </div>
  );
};

export default Checkout;
