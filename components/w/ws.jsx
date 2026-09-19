import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fbzyvzb3i.css';
import '../../css/j/jtaov8bub.css';
import '../../css/l/lju-rkbzr.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fbzyvzb3i"/><path class="jtaov8bub"/><path class="lju-rkbzr"/></g>`,
		"fallback": "cif:ws",
	});
}

export default Component;
