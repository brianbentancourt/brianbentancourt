import { createTheme } from '@mui/material/styles'

const cyberPunk = createTheme({
    typography: {
        fontFamily: [
            'Cyber',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
        ].join(','),
    },
    palette: {
        pink: {
            main: '#ff2a6d',
            contrastText: '#fff',
        },
        lightSky: {
            main: '#d1f7ff',
            contrastText: '#fff',
        },
        sky: {
            main: '#05d9e8',
            contrastText: '#fff',
        },
        blue: {
            main: '#005678',
            contrastText: '#fff',
        },
        darkBlue: {
            main: '#01012b',
            contrastText: '#fff',
        },
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
})

export default cyberPunk