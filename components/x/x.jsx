import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsekoabps.css';

const viewBox = {"width":537,"height":654};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsekoabps"/>`,
		"fallback": "ls:x",
	});
}

export default Component;
