import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqe44ubtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yqe44ubtu"/>`,
		"fallback": "iconoir:web-window-solid",
	});
}

export default Component;
