import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3p49obkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3p49obkg"/>`,
		"fallback": "boxicons:whiteboard-filled",
	});
}

export default Component;
