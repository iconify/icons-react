import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrko4rbfm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrko4rbfm"/>`,
		"fallback": "game-icons:wooden-helmet",
	});
}

export default Component;
