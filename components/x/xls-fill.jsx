import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i47kys6fz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i47kys6fz"/>`,
		"fallback": "mingcute:xls-fill",
	});
}

export default Component;
