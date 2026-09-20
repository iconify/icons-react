import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8_8vcc2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8_8vcc2r"/>`,
		"fallback": "lineicons:x",
	});
}

export default Component;
