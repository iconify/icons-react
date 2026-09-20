import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qf2jfbb9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qf2jfbb9z"/>`,
		"fallback": "simple-icons:zincsearch",
	});
}

export default Component;
