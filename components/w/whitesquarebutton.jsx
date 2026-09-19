import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbflf-bvd.css';
import '../../css/p/pypo4hbot.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbflf-bvd"/><path class="pypo4hbot"/>`,
		"fallback": "fxemoji:whitesquarebutton",
	});
}

export default Component;
