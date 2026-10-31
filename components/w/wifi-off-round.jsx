import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2cw-qbsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2cw-qbsk"/>`,
		"fallback": "coolicons:wifi-off-round",
	});
}

export default Component;
