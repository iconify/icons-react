import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/illhesq-j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="illhesq-j"/>`,
		"fallback": "game-icons:wooden-crate",
	});
}

export default Component;
