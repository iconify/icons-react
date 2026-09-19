import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj9b4dbld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yj9b4dbld"/>`,
		"fallback": "flowbite:wine-glass-empty-solid",
	});
}

export default Component;
