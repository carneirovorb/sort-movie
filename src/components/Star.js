import React from 'react';
import Svg, {Path} from 'react-native-svg';

function Star({color}) {
  return (
    <Svg width="13" height="12">
      <Path
        d="M7.54811 3.86921L6 0V8.6338L9.52671 10.8541L8.50489 6.81389L11.7063 4.1459L7.54811 3.86921Z"
        fill={color ? color : '#C4C4C4'}
      />
      <Path
        d="M4.4509 3.86775L6 0V8.63053L2.47103 10.85L3.49351 6.81131L0.290001 4.14433L4.4509 3.86775Z"
        fill={color ? color : '#DCC044'}
      />
    </Svg>
  );
}

export default Star;
