import React from 'react'

const FormularioCheckout = ( { datosForm, handleChangeInput, handleSubmitForm } ) => {
  return (
    <div>
        <form onSubmit={handleSubmitForm} className="form-checkout">
            <label htmlFor="">Nombre:</label>
            <input type="text" name='nombre' value={datosForm.nombre} onChange={handleChangeInput}/>

            <label htmlFor="">Telefono:</label>
            <input type="text" name='telefono' value={datosForm.telefono} onChange={handleChangeInput}/>

            <label htmlFor="">Email:</label>
            <input type="email" name='email' value={datosForm.email} onChange={handleChangeInput}/>

            <label htmlFor="">Repetir Email:</label>
            <input type="email" name='confirmarEmail' value={datosForm.confirmarEmail} onChange={handleChangeInput}/>

            <button type='submit' className="button-form">Enviar orden</button>
        </form>
    </div>
  )
}

export default FormularioCheckout