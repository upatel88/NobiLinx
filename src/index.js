import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { loadTheme } from 'office-ui-fabric-react/lib/Styling';
import { initializeIcons } from '@uifabric/icons';

// Register icons and pull the fonts from the default SharePoint cdn:
initializeIcons();

loadTheme({
    palette: {
    
        "themePrimary": "#0078d4",
        "themeLighterAlt": "#eff6fc",
        "themeLighter": "#deecf9",
        "themeLight": "#c7e0f4",
        "themeTertiary": "#71afe5",
        "themeSecondary": "#2b88d8",
        "themeDarkAlt": "#106ebe",
        "themeDark": "#005a9e",
        "themeDarker": "#004578",
        "neutralLighterAlt": "#f8f8f8",
        "neutralLighter": "#f4f4f4",
        "neutralLight": "#eaeaea",
        "neutralQuaternaryAlt": "#dadada",
        "neutralQuaternary": "#d0d0d0",
        "neutralTertiaryAlt": "#c8c8c8",
        "neutralTertiary": "#c2c2c2",
        "neutralSecondary": "#858585",
        "neutralPrimaryAlt": "#4b4b4b",
        "neutralPrimary": "#333",
        "neutralDark": "#272727",
        "black": "#1d1d1d",
        "white": "#fff",
        "primaryBackground": "#fff",
        "primaryText": "#333",
        "bodyBackground": "#fff",
        "bodyText": "#333",
        "disabledBackground": "#f4f4f4",
        "disabledText": "#c8c8c8"
    }
});
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
