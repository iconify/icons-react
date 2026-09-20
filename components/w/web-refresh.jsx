import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-dcdt1ug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-dcdt1ug"/>`,
		"fallback": "mdi:web-refresh",
	});
}

export default Component;
