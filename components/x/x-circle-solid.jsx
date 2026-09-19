import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia2ea1eon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ia2ea1eon"/>`,
		"fallback": "heroicons:x-circle-solid",
	});
}

export default Component;
