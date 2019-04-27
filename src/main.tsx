import * as React from 'react';
import { validateDateInPeriod } from 'validator-date-in-period';
import { FieldValidationResult } from 'lc-form-validation';
import { DatePeriodComponent } from './date-period';

export interface Props { }

export interface State {
    dateBegin: string,
    dateEnd: string,
    dateInput: string,
}

export class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            dateBegin: '',
            dateEnd: '',
            dateInput: '',
        };
    }

    onChangePeriodBeginning = (event) =>
        this.setState({...this.state, dateBegin: event.target.value});
    
    onChangePeriodEnding = (event) =>
        this.setState({...this.state, dateEnd: event.target.value});
    
    onChangeDateInput = (event) =>
        this.setState({
            ...this.state,
            dateInput: event.target.value,
        });

    getResultValidationString = () => {
        if (this.state.dateInput === '')
            return "Waiting to field modification...";
        
        const validateResult : FieldValidationResult = validateDateInPeriod(
            this.state.dateInput, 
            this.state.dateBegin, 
            this.state.dateEnd
        );

        if (validateResult.succeeded) {
            return "Great value!!";
        } else {
            return "Fail to choose. Try again.";
        }
    }

    render() {
        return (
            <>
                <div><b>Period:</b></div>
                <div><DatePeriodComponent
                    onChangeBeginningPeriod = {this.onChangePeriodBeginning}
                    onChangeEndingPeriod = {this.onChangePeriodEnding}
                /></div>
                <br/>
                <div><b>Date to check is in period or not:</b></div>
                <div><input type="date" onChange = {this.onChangeDateInput} /></div>
                <br/>
                <div><b>Result validation:</b></div>
                <div>{this.getResultValidationString()}</div>
            </>
        );
    }
}