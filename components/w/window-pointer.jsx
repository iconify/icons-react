import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vbagabb9t.css';
import '../../css/h/hbp29jb_v.css';
import '../../css/r/rho1w1b5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vbagabb9t"/><path class="hbp29jb_v"/><path class="rho1w1b5b"/></g>`,
		"fallback": "reicon:window-pointer",
	});
}

export default Component;
