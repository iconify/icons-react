import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdgwk2z5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdgwk2z5d"/>`,
		"fallback": "lineicons:yahoo",
	});
}

export default Component;
