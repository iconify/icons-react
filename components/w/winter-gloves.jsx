import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn11h8yys.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn11h8yys"/>`,
		"fallback": "game-icons:winter-gloves",
	});
}

export default Component;
