import * as React from 'react';
import {
    TextField,
    MaskedTextField
} from 'office-ui-fabric-react/lib/TextField';
import {Customer} from "./Customer"
import CustomerIssues from "./CustomerIssues"
export class Issue extends React.Component {
    render() {
        return (
            <div class="ms-Grid" style={{ margin: "10px" }}>
                <Customer />
                <CustomerIssues />
            </div>
        );
    }
}