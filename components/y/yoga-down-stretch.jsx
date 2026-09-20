import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rnbj28bcv.css';
import '../../css/s/sdvkxab9n.css';
import '../../css/d/d_vulypmt.css';
import '../../css/b/bf_m8_5mk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rnbj28bcv"/><path class="sdvkxab9n"/><path class="d_vulypmt"/><path class="bf_m8_5mk"/></g>`,
		"fallback": "streamline-ultimate-color:yoga-down-stretch",
	});
}

export default Component;
