import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cx3bw6b0o.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cx3bw6b0o"/>`,
		"fallback": "whh:y-upper-case",
	});
}

export default Component;
