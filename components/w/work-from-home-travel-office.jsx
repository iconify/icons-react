import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtud3ynqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mtud3ynqh"/>`,
		"fallback": "streamline-freehand:work-from-home-travel-office",
	});
}

export default Component;
