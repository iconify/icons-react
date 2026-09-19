import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6jpl60lx.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6jpl60lx"/>`,
		"fallback": "dinkie-icons:webcam-small",
	});
}

export default Component;
