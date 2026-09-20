import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6vs_fb3e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6vs_fb3e"/>`,
		"fallback": "subway:world-1",
	});
}

export default Component;
