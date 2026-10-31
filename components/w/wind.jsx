import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/q64vjubag.css';
import '../../css/u/uo4pa5vpi.css';
import '../../css/l/lbp4_0bgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="q64vjubag wm-shadow"/><path class="uo4pa5vpi wm-shadow"/><path class="lbp4_0bgi"/></g>`,
		"fallback": "withicons-brutal:wind",
	});
}

export default Component;
