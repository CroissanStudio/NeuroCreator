import React, { useEffect } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';

const Canvas = (props) => {
    useEffect(() => {
    }, []);
    return (
        <ReactSketchCanvas
            width="100%"
            height="100%"
            strokeWidth={3}
            strokeColor="black"
            backgroundColor="transparent"
            undoSteps={10}
            style={{ border: '1px solid #000' }}
            {...props}
        />
    );

}
export default Canvas;