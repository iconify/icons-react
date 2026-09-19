import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc6p9nboj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zc6p9nboj"/>`,
		"fallback": "game-icons:wingfoot",
	});
}

export default Component;
