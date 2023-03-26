import "@testing-library/jest-dom";
import { render, fireEvent, waitFor, getByTestId } from "@testing-library/react"; 
import { describe, expect, test } from "vitest";
import Login from '../../login/index';
import { createMemoryHistory } from 'history';

describe('Testing login', ()=>{
    test('Testing login success', async ()=>{
        const { getByText, getByTestId } = render( <Login /> );
        const inputEmail = getByTestId('email');
        const inputPassword = getByTestId('password');
        const history = createMemoryHistory();
        
        fireEvent.change( inputEmail, { target:{ value: 'Example@gmail.com'}});
        fireEvent.change( inputPassword, { target:{ value: 'senha123'}});
        
        const button = getByText('Login');
        fireEvent.click(button);
        
        await waitFor(() => expect(history.location.pathname).toBe('/'));
    });
    test('Testing login error', async ()=>{
        const { getByText, getByTestId } = render( <Login /> );
        const inputEmail = getByTestId('email');
        const inputPassword = getByTestId('password');
        
        fireEvent.change( inputEmail, { target:{ value: 'Example@gmail.com'}});
        fireEvent.change( inputPassword, { target:{ value: 'lorem'}});
        
        const button = getByText('Login');
        fireEvent.click(button);
        
        const errorMessage = await waitFor( ()=>  getByTestId('error'));
        expect(errorMessage).toBeInTheDocument();
    });
});