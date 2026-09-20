import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/woygshc5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="woygshc5y"/>`,
		"fallback": "mdi:white-balance-iridescent",
	});
}

export default Component;
