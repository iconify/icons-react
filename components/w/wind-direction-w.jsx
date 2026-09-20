import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xiuit_b-v.css';

const viewBox = {"width":1542,"height":1542};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xiuit_b-v"/>`,
		"fallback": "wi:wind-direction-w",
	});
}

export default Component;
