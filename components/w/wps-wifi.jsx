import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-s-q8bts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-s-q8bts"/>`,
		"fallback": "cbi:wps-wifi",
	});
}

export default Component;
