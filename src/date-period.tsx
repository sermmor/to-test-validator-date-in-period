import * as React from 'react';

export interface Props {
  onChangeBeginningPeriod: (event) => void;
  onChangeEndingPeriod: (event) => void;
}

export const DatePeriodComponent = (props: Props) => {
  return (
    <>
        From date <input type="date" onChange={props.onChangeBeginningPeriod}/> to date 
        <input type="date" onChange={props.onChangeEndingPeriod}/>
    </>
  );
}