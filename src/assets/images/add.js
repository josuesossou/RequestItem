
import React from 'react';

/**
 * svg image turned into component so that it's color can be manupulated
 * @params fill heigt width
 * @returns an add icon image. please beware that using width and height in the style will affect the wrapper of the svg.
 * use the width and height props to affect the size of the icon
 */
export default ({fill, height, width, style}) => (
    <div style={style}>
        <svg xmlns="http://www.w3.org/2000/svg" fill={fill || "#fff"} width={width || "50"} height={height || "50"} viewBox="0 0 75.083 75"><g transform="translate(-327.5 -739)"><rect class="a" width="12" height="75" transform="translate(359 739)"/><rect class="a" width="12.514" height="75.083" transform="translate(402.583 770.285) rotate(90)"/></g></svg>
    </div>
)