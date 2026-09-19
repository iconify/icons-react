import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqq8e0bjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqq8e0bjt"/>`,
		"fallback": "ci:window-terminal",
	});
}

export default Component;
