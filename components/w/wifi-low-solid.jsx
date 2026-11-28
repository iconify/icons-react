import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qoqb84bux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qoqb84bux"/>`,
		"fallback": "iconaut:wifi-low-solid",
	});
}

export default Component;
