import "@testing-library/jest-dom";
import { render, fireEvent, waitFor, getByTestId } from "@testing-library/react"; 
import { describe, expect, test } from "vitest";
import { createMemoryHistory } from 'history';
import Community from "../../community";
import {  setUserSession } from "../../../storage/utils";
import { Router } from 'react-router-dom';

beforeAll(()=>{
    setUserSession('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTFkZjA0YmM3M2U0MDg1NGQ5NzA2YyIsImlhdCI6MTY3OTgzOTgxOH0.cmEvAXwWqcEorvEv0sfxHn7aUC_41XOkzemamY6_nEo', 'Example');
});

describe('Testing create a post case',()=>{
    test('Succesful case', async ()=>{
        
        const history = createMemoryHistory({
            initialEntries: ['/?id=639b4fc888f1d73054943373'],
        });
        const { getByText, getByTestId } = render( 
            <Router history={history} >
                <Community />
            </Router>
        );
        
        const subButton = await waitFor(getByText('unsub'));    
        expect(1).toBe(2);
    });
});