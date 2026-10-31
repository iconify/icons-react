import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfwr5wbfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfwr5wbfb"/>`,
		"fallback": "coolicons:window-plus-corner-round",
	});
}

export default Component;
