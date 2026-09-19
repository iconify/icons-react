import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4707bcna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4707bcna"/>`,
		"fallback": "iconoir:windows",
	});
}

export default Component;
