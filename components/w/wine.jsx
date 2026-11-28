import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_94e1ufu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_94e1ufu"/>`,
		"fallback": "noviair:wine",
	});
}

export default Component;
