import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgh63ebfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgh63ebfe"/>`,
		"fallback": "boxicons:x-square-filled",
	});
}

export default Component;
