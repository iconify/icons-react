import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fccpd3bnn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fccpd3bnn"/>`,
		"fallback": "game-icons:web-spit",
	});
}

export default Component;
