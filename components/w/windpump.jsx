import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt3qpcbsh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt3qpcbsh"/>`,
		"fallback": "game-icons:windpump",
	});
}

export default Component;
