import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psyey8b0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psyey8b0u"/>`,
		"fallback": "mdi:zip-disk",
	});
}

export default Component;
