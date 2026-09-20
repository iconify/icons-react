import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_5qt8t0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_5qt8t0b"/>`,
		"fallback": "ri:wireless-charging-fill",
	});
}

export default Component;
