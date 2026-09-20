import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntsc62v-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntsc62v-r"/>`,
		"fallback": "ri:zoom-out-fill",
	});
}

export default Component;
