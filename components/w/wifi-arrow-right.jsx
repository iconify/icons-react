import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucq63j0-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucq63j0-c"/>`,
		"fallback": "mdi:wifi-arrow-right",
	});
}

export default Component;
