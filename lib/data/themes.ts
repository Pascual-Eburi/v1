import React from 'react'

import { BsMoonFill, BsSunFill } from "react-icons/bs";
import {BiDesktop} from "react-icons/bi"
import type { themePropsType } from '../types';


export const themeOptions: themePropsType[] = [
        {
        icon: React.createElement(BsSunFill),
        text: "light"
    },
    {
        icon: React.createElement(BiDesktop),
        text: "system"
    },
    {
        icon: React.createElement(BsMoonFill),
        text: "dark"
    }
];