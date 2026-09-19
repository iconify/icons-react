import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5080z4re.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5080z4re"/>`,
		"fallback": "game-icons:wifi-router",
	});
}

export default Component;
