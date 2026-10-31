import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nit4bmvhy.css';
import '../../css/p/p48i41b9t.css';
import '../../css/r/rkmu18b6w.css';
import '../../css/d/dlh8ambyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="nit4bmvhy wm-shadow"/><path class="p48i41b9t wm-shadow"/><path class="rkmu18b6w"/><path class="dlh8ambyq"/></g>`,
		"fallback": "withicons-brutal:zap-off",
	});
}

export default Component;
