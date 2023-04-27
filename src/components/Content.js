import React, { useState } from "react";
import DataInput from "./DataInput";
import '../styles/styles.css';


const Content = () => {
    const [diaInch, setDiaInch] = useState('');
    const [diaMetric, setDiaMetric] = useState('');
    const [CLInch, setCLInch] = useState('');
    const [CLMetric, setCLMetric] = useState('');
    const [CSInch, setCSInch] = useState('');
    const [CSMetric, setCSMetric] = useState('');
    const [FRInch, setFRInch] = useState('');
    const [FRMetric, setFRMetric] = useState('');
    const [SS, setSS] = useState('');

    const handleChange = (input) => {
        switch(input.name){
            case 'diaInch':
                setDiaInch(input.value);
                setDiaMetric((Number(input.value) * 25.4).toFixed(2));
                return;
            case 'diaMetric':
                setDiaMetric(input.value);
                setDiaInch((Number(input.value) / 25.4).toFixed(4));
                return;
            case 'CLInch':
                setCLInch(input.value);
                setCLMetric((Number(input.value) * 25.4 / 1000).toFixed(3));
                return;
            case 'CLMetric':
                setCLMetric(input.value);
                setCLInch((Number(input.value) / 25.4).toFixed(2));
                return;
            case 'CSInch':
                setCSInch(input.value);
                setCSMetric((Number(input.value) * 0.3048).toFixed(2));
                return;
            case 'CSMetric':
                setCSMetric(input.value);
                setCSInch((Number(input.value) / 0.3048).toFixed(2));
                return;
            case 'FRInch':
                setFRInch(input.value);
                setFRMetric((Number(input.value) * 0.0254).toFixed(2));
                return;
            case 'FRMetric':
                setFRMetric(input.value);
                setFRInch((Number(input.value) / 0.0254).toFixed(2));
                return;
            case 'SS':
                setSS(input.value);
                return;
            default:
                console.log('input err');
        }
    }

    const handleClick = () => {
        window.location.reload();
    }


    return(
        <div className="content">
            <DataInput
                onDataInputChange={handleChange}
                diaInch={diaInch}
                diaMetric={diaMetric}
                CLInch={CLInch}
                CLMetric={CLMetric}
                CSInch={CSInch}
                CSMetric={CSMetric}
                FRInch={FRInch}
                FRMetric={FRMetric}
                SS={SS}
            />
            <button onClick={handleClick}>Reset</button>
        </div>
    );
}

export default Content;