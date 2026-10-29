import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gkf7pdbgi.css';
import '../../css/v/v335rzk7y.css';
import '../../css/a/aaskxzbtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gkf7pdbgi wm-a"/><path class="v335rzk7y"/><path class="aaskxzbtv wm-a"/></g>`,
		"fallback": "withicons:wind-duo",
	});
}

export default Component;
