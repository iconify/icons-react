import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj-4mebdu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pj-4mebdu"/>`,
		"fallback": "game-icons:wrecking-ball",
	});
}

export default Component;
