import React from 'react';
 import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box } from '@mui/material';


import BodyPart from './BodyPart';


const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return(
    <div>
  //
    {data.map((item) => (
    //  <Box
    //   key={item.id|| item}
    //   itemId={item.id || item}
    //   title={item.id || item}
    //   m="0 40px"
    //   >
       <BodyPart key={item.id} item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
     
    ))}
    

);
</div>
    }   
export default HorizontalScrollbar;
