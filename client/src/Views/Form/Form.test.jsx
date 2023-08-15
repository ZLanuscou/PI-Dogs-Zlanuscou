import Form from "./Form";
import { render, fireEvent } from '@testing-library/react';
test("Tiene que haber un form", ()=>{
    const { getByRole } = render(<Form />)
    const formElement = getByRole('form')
    expect(formElement).toBeInTheDocument()
})

test("Tiene que funcionar los handlers", ()=>{
    const { getByRole, getByLabelText  } = render(<Form onSubmit={handleSubmit}/>)
    const nombreInput = getByLabelText('Nombre')
    const pesoInput = getByLabelText('Peso')
    fireEvent.change(nombreInput, { target: { value: 'nuevoNombre' } });
    fireEvent.change(pesoInput, { target: { value: '3' } });
   const submitForm = getByRole("button")
   fireEvent.click(submitForm)
   expect(handleSubmit).toHaveBeenCalledTimes(1);
})