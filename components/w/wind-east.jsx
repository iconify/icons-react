import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sc5ipyb4q.css';
import '../../css/r/rrhfdgbdg.css';
import '../../css/s/sgoq9pb5v.css';
import '../../css/l/lu82gsbwe.css';
import '../../css/y/yvbgwdbew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sc5ipyb4q"/><path class="rrhfdgbdg"/><path class="sgoq9pb5v"/><path class="lu82gsbwe"/><path class="yvbgwdbew"/></g>`,
		"fallback": "streamline-ultimate-color:wind-east",
	});
}

export default Component;
