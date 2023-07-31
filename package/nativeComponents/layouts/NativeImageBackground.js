import React from 'react';
import {SCImageBackground} from '../../styledComponents/layouts/SCImageBackground';
import { UTurnLeft } from '@mui/icons-material';

export default function NativeImageBackground(props) {
  const {source, resizeMode} = props;

  return (
    <SCImageBackground
      {...props}
      style={{
        backgroundImage: "url("+source+")",
        backgroundRepeat: 'no-repeat',
        backgroundSize: resizeMode, 
      }}>
      {props.children}
    </SCImageBackground>
  );
}
