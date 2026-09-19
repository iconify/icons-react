import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9af0yl0h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9af0yl0h"/>`,
		"fallback": "dashicons:welcome-widgets-menus",
	});
}

export default Component;
