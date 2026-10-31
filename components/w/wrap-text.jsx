import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qsfqdxr5r.css';
import '../../css/d/dqgna771n.css';
import '../../css/c/c9mxgwtuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qsfqdxr5r wm-shadow"/><path class="dqgna771n wm-shadow"/><path class="c9mxgwtuq"/></g>`,
		"fallback": "withicons-brutal:wrap-text",
	});
}

export default Component;
