import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccj7lubgn.css';
import '../../css/k/kdw8ckbee.css';

const viewBox = {"width":240,"height":234};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccj7lubgn"/><path class="kdw8ckbee"/>`,
		"fallback": "thesvg-color:xd",
	});
}

export default Component;
