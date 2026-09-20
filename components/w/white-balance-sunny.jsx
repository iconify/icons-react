import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jaa6obcen.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jaa6obcen"/>`,
		"fallback": "mdi:white-balance-sunny",
	});
}

export default Component;
