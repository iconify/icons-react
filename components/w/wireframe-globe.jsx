import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zaet5ofns.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zaet5ofns"/>`,
		"fallback": "game-icons:wireframe-globe",
	});
}

export default Component;
