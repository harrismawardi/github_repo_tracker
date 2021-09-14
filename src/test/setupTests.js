import React from 'react';

import '@testing-library/jest-dom';
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducer/index.js'

const TestProviders = ({ initState }) => {
    initState ||= {
        result: {
            user: { name: '', login: '', bio: '', avatar_url:'' },
            repos: [],
        },
        error: null
    };
    let testReducer = () => reducer(initState, { type: '@@INIT' })
    const testStore = createStore(testReducer, applyMiddleware(thunk))

    return ({ children }) => (
        <Provider store={testStore}>
            { children }
        </Provider>
    )
}

const renderWithReduxProvider = (ui, options={}) => {
    let TestWrapper = TestProviders(options)
    render(ui, { wrapper: TestWrapper, ...options })
}

global.renderWithReduxProvider = renderWithReduxProvider
global.React = React;
global.render = render;
global.userEvent = userEvent;
