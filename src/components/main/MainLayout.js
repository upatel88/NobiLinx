import React from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'
import NavBar from '../header/NavBar.js'
// import SidebarMenu from './components/SidebarMenu.js'
// import Content from './components/Content.js'
import Footer from '../footer/Footer'
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import {
    PivotItem,
    IPivotItemProps,
    Pivot
} from 'office-ui-fabric-react/lib/Pivot';
import { Issue } from '../issue/Issue'
class MainLayout extends React.Component {
    render() {
        return (
            <Fabric className="App">
                <div className="header">
                    <NavBar />
                </div>
                <div className="body">
                    <Pivot>
                        <PivotItem linkText='Register Issues' itemIcon='Add'>
                            <Issue />
                        </PivotItem>
                        <PivotItem linkText='Search Issues ' itemIcon='Search'>
                        </PivotItem>

                    </Pivot>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </Fabric>
        );
    }
}

export default MainLayout;