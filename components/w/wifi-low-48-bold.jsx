import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xph1b26-r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xph1b26-r"/>`,
		"fallback": "energy-icons:wifi-low-48-bold",
	});
}

export default Component;
