import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzqfh5bfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzqfh5bfz"/>`,
		"fallback": "ri:wifi-off-line",
	});
}

export default Component;
