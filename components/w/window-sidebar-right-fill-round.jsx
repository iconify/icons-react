import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r02mcwb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r02mcwb0y"/>`,
		"fallback": "coolicons:window-sidebar-right-fill-round",
	});
}

export default Component;
