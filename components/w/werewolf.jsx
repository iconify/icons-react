import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qew3hfgsa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qew3hfgsa"/>`,
		"fallback": "game-icons:werewolf",
	});
}

export default Component;
