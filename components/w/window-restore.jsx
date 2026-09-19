import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqxc8o3zi.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqxc8o3zi"/>`,
		"fallback": "fa7-solid:window-restore",
	});
}

export default Component;
