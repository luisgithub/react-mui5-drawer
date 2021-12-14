import React from "react";
import Header from './Header';
import Navigation from './Navigation'
import RoutesContent from './RoutesContent'

interface MainProps {}

export default function Main(props : MainProps){
    const [open, setOpen] = React.useState(true);
    
    const toggleDrawer = () => {
        setOpen(!open);
    }

    return (
        <>
            <Header onToggle={toggleDrawer} />
            <Navigation />
            <RoutesContent />
        </>
    );
}