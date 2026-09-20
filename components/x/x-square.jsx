import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfa3zybio.css';
import '../../css/s/so8u7503r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfa3zybio"/><path class="so8u7503r"/>`,
		"fallback": "mage:x-square",
	});
}

export default Component;
