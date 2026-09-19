import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dihi-wble.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dihi-wble"/>`,
		"fallback": "fa7-brands:windows",
	});
}

export default Component;
