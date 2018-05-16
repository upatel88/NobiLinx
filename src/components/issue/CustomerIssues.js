import * as React from 'react';
import {
    TextField,
    MaskedTextField
} from 'office-ui-fabric-react/lib/TextField';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { DatePicker, DayOfWeek, IDatePickerStrings } from 'office-ui-fabric-react/lib/DatePicker';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
export default class CustomerIssues extends React.Component {

    render() {
        const DayPickerStrings = {
            months: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ],

            shortMonths: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],

            days: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
            ],

            shortDays: [
                'S',
                'M',
                'T',
                'W',
                'T',
                'F',
                'S'
            ],

            goToToday: 'Go to today',
            prevMonthAriaLabel: 'Go to previous month',
            nextMonthAriaLabel: 'Go to next month',
            prevYearAriaLabel: 'Go to previous year',
            nextYearAriaLabel: 'Go to next year'
        };

        return (
            <div class="ms-Grid" style={{ margin: "10px" }}>
                <Label style={{ marginTop: "15px" }}><strong>Issue</strong></Label>
                <div class="ms-Grid-row">
                    <div class="ms-Grid-col ms-sm12 ms-md4 ms-lg2">
                        <TextField
                            label='Issue Name'
                        />
                    </div>
                    <div class="ms-Grid-col ms-sm6 ms-md4 ms-lg2">

                        <Dropdown
                            placeHolder='Select an Category'
                            label='Issue Category'
                            id='Errormessagedrop1'
                            ariaLabel=''
                            options={
                                [
                                    { key: 'A', text: 'Option a' },
                                    { key: 'B', text: 'Option b' },
                                    { key: 'C', text: 'Option c' },
                                    { key: 'D', text: 'Option d' },
                                    { key: 'E', text: 'Option e' },
                                ]
                            }
                        />
                    </div>
                    <div class="ms-Grid-col ms-sm12 ms-md4 ms-lg2">

                        <DatePicker
                            strings={DayPickerStrings}
                            placeholder='Select a date...'
                            label="Date"
                            // tslint:disable:jsx-no-lambda
                            onAfterMenuDismiss={() => console.log('onAfterMenuDismiss called')}
                        // tslint:enable:jsx-no-lambda
                        />
                    </div>

                    <div class="ms-Grid-col ms-sm6 ms-md4 ms-lg3">
                        <TextField
                            label='Description'
                            multiline
                            disabled={false}
                        />
                    </div>

                </div>

                <div class="ms-Grid-row">
                    <div class="ms-Grid-col ms-sm12 ms-md4 ms-lg2">
                        <DefaultButton
                            text='Save'
                            primary={true}
                        />
                    </div>
                </div>
            </div>
        );
    }
}