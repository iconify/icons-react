import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgrfo7bbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgrfo7bbk"/>`,
		"fallback": "ri:whatsapp-fill",
	});
}

export default Component;
