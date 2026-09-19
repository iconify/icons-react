import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk7867bas.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk7867bas"/>`,
		"fallback": "game-icons:zebra-shield",
	});
}

export default Component;
