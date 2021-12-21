/*  STEP 2
This is where we're going to create our theme in context. import 'createContext', this function will create context for us */
import React, { createContext } from 'react';

/* STEP 3
export  'createContext'
So this is going to create a context for us, and it's going to be stored in this constant(const) theme context.*/
export const ThemeContext = createContext();
