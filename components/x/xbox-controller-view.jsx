import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1l3lq7gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1l3lq7gm"/>`,
		"fallback": "mdi:xbox-controller-view",
	});
}

export default Component;
