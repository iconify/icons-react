import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pg8zitz7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pg8zitz7z"/>`,
		"fallback": "mdi:widget-box-outline",
	});
}

export default Component;
