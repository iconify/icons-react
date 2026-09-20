import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etss8k7ct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etss8k7ct"/>`,
		"fallback": "mdi:wifi-arrow-left-right",
	});
}

export default Component;
