import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy3fjbcsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy3fjbcsi"/>`,
		"fallback": "guidance:wheelchair-basketball",
	});
}

export default Component;
