import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uiw4tobef.css';

const viewBox = {"width":1344,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uiw4tobef"/>`,
		"fallback": "fa:yahoo",
	});
}

export default Component;
