import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_62dabzf.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_62dabzf"/>`,
		"fallback": "whh:whistle",
	});
}

export default Component;
