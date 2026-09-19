import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-89rbqjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-89rbqjs"/>`,
		"fallback": "boxicons:x-circle-filled",
	});
}

export default Component;
