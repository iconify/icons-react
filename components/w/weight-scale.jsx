import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i07gtwbuw.css';
import '../../css/y/ygl7ebcwj.css';
import '../../css/u/uaixagjtg.css';
import '../../css/g/g9sivlltp.css';
import '../../css/m/m852rkfpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i07gtwbuw"/><path class="ygl7ebcwj"/><path class="uaixagjtg"/><path class="g9sivlltp"/><path class="m852rkfpq"/></g>`,
		"fallback": "streamline-cyber-color:weight-scale",
	});
}

export default Component;
