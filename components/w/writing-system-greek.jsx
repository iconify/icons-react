import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpfqdcc8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpfqdcc8r"/>`,
		"fallback": "mdi:writing-system-greek",
	});
}

export default Component;
