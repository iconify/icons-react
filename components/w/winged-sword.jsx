import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4pgqache.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4pgqache"/>`,
		"fallback": "game-icons:winged-sword",
	});
}

export default Component;
