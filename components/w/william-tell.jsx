import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwd4xibku.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwd4xibku"/>`,
		"fallback": "game-icons:william-tell",
	});
}

export default Component;
