import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stun2duqh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stun2duqh"/>`,
		"fallback": "roentgen:wlan-free",
	});
}

export default Component;
