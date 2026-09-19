import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2det2rzn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2det2rzn"/>`,
		"fallback": "game-icons:wooden-pier",
	});
}

export default Component;
