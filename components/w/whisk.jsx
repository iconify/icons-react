import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfz43q1cs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfz43q1cs"/>`,
		"fallback": "game-icons:whisk",
	});
}

export default Component;
