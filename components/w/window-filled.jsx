import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7nezibak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7nezibak"/>`,
		"fallback": "boxicons:window-filled",
	});
}

export default Component;
