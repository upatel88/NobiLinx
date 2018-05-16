import * as React from 'react';
import {
    TextField,
    MaskedTextField
} from 'office-ui-fabric-react/lib/TextField';
import { Label } from 'office-ui-fabric-react/lib/Label';

export class Customer extends React.Component {
    render() {
        return (
            <div class="ms-Grid" style={{ margin: "10px" }}>
                <Label style={{ marginTop: "15px" }}><strong>Customer Info.</strong></Label>
                <div class="ms-Grid-row">
                    <div class="ms-Grid-col ms-sm12 ms-md4 ms-lg2">
                        <TextField
                            label='Client Id'
                        />
                    </div>
                    <div class="ms-Grid-col ms-sm6 ms-md4 ms-lg2">

                        <TextField
                            label='Name'
                            disabled={false}
                        />
                    </div>
                    <div class="ms-Grid-col ms-sm6 ms-md4 ms-lg2">

                        <MaskedTextField
                            label='Phone Number'
                            mask='(999) 999 - 9999'
                        />
                    </div>
                    <div class="ms-Grid-col ms-sm6 ms-md4 ms-lg4">
                        <TextField
                            label='Address'
                            disabled={false}
                        />
                    </div>
                </div>
            </div>
        );
    }
}