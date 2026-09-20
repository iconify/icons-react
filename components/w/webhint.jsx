import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvy8izgsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvy8izgsh"/>`,
		"fallback": "simple-icons:webhint",
	});
}

export default Component;
