import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxwjsibxu.css';
import '../../css/t/trpnkyp1z.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxwjsibxu"/><path class="trpnkyp1z"/>`,
		"fallback": "thesvg-color:zohomail",
	});
}

export default Component;
