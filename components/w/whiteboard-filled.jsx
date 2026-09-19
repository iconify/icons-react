import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow6pd-bft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow6pd-bft"/>`,
		"fallback": "griddy-icons:whiteboard-filled",
	});
}

export default Component;
