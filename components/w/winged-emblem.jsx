import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpdi5zjmy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpdi5zjmy"/>`,
		"fallback": "game-icons:winged-emblem",
	});
}

export default Component;
