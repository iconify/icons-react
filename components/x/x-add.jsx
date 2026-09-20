import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrmfy3bao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrmfy3bao"/>`,
		"fallback": "uil:x-add",
	});
}

export default Component;
