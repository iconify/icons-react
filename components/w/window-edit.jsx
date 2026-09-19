import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa6nr1byd.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa6nr1byd"/>`,
		"fallback": "fluent-mdl2:window-edit",
	});
}

export default Component;
