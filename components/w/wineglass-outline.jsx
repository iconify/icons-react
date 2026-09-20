import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clc8j0pcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="clc8j0pcp"/>`,
		"fallback": "solar:wineglass-outline",
	});
}

export default Component;
