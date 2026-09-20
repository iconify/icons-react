import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kao65-mts.css';
import '../../css/x/xah9mvbce.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kao65-mts"/><path class="xah9mvbce"/>`,
		"fallback": "selfhst:xrsh-dark",
	});
}

export default Component;
