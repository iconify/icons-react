import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af-zpmbef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af-zpmbef"/>`,
		"fallback": "qlementine-icons:windows-24",
	});
}

export default Component;
