import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuj49nmbg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vuj49nmbg"/>`,
		"fallback": "game-icons:wisdom",
	});
}

export default Component;
