import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdvk-d6wd.css';
import '../../css/i/ikeeb1b_d.css';
import '../../css/w/w_a4xnomr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gdvk-d6wd"><path class="ikeeb1b_d"/><path class="w_a4xnomr"/></g>`,
		"fallback": "ion:wifi-outline",
	});
}

export default Component;
