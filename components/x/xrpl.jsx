import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm69y4u3e.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm69y4u3e"/>`,
		"fallback": "fa7-brands:xrpl",
	});
}

export default Component;
