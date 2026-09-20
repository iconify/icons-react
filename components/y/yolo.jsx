import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l98ukzezs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l98ukzezs"/>`,
		"fallback": "thesvg-color:yolo",
	});
}

export default Component;
