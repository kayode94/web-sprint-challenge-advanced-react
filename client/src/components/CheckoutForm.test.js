import React from "react";
import { render, screen,fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)
    //1. get acces to form fields
    const firstName = screen.getByLabelText(/First Name/i)
    const LastName = screen.getByLabelText(/Last Name/i)
    const address = screen.getByLabelText(/address/i)
    const city = screen.getByLabelText(/city/i)
    const state = screen.getByLabelText(/state/i)
    const zipCode = screen.getByLabelText(/zip/i)
    //2. Add text to fields and expect

    expect(firstName.value).toEqual('')
    fireEvent.change(firstName, {target: {value:'Kay'}})
    expect(firstName.value).not.toEqual('')
    //////////////////////////////////////////////////////////////

    expect(LastName.value).toEqual('')
    fireEvent.change(LastName, {target: {value:'Rich'}})
    expect(LastName.value).not.toEqual('')
    //////////////////////////////////////////////////////////////

    expect(address.value).toEqual('')
    fireEvent.change(address, {target: {value:'111-111-111st'}})
    expect(address.value).not.toEqual('')
    //////////////////////////////////////////////////////////////

    expect(city.value).toEqual('')
    fireEvent.change(city, {target: {value:'NY'}})
    expect(city.value).not.toEqual('')
    //////////////////////////////////////////////////////////////

    expect(state.value).toEqual('')
    fireEvent.change(state, {target: {value:'NYS'}})
    expect(state.value).not.toEqual('')
    //////////////////////////////////////////////////////////////

    expect(zipCode.value).toEqual('')
    fireEvent.change(zipCode, {target: {value:'000-000-000'}})
    expect(zipCode.value).not.toEqual('')

});
