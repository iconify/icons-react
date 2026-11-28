import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls8624bzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls8624bzq"/>`,
		"fallback": "iconaut:webhook-solid",
	});
}

export default Component;
