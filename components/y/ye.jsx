import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d2gqvvb6k.css';
import '../../css/x/xy_s6mbul.css';
import '../../css/y/ynt2pcbub.css';

const viewBox = {"width":300,"height":200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d2gqvvb6k"/><path class="xy_s6mbul"/><path class="ynt2pcbub"/></g>`,
		"fallback": "cif:ye",
	});
}

export default Component;
