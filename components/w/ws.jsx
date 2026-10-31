import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xu_rjcven.css';
import '../../css/y/yrfmaj0av.css';
import '../../css/r/r_x1-gbmn.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xu_rjcven"/><path class="yrfmaj0av"/><path class="r_x1-gbmn"/></g>`,
		"fallback": "cif:ws",
	});
}

export default Component;
