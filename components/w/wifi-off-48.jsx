import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzac5pbwf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzac5pbwf"/>`,
		"fallback": "energy-icons:wifi-off-48",
	});
}

export default Component;
