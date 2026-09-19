import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3jfc8bqy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3jfc8bqy"/>`,
		"fallback": "game-icons:wolf-trap",
	});
}

export default Component;
