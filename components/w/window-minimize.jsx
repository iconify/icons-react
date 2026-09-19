import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgt78jbjv.css';

const viewBox = {"width":344,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgt78jbjv"/>`,
		"fallback": "zmdi:window-minimize",
	});
}

export default Component;
