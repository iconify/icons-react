import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hep1bmbcd.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hep1bmbcd"/>`,
		"fallback": "dinkie-icons:window-browser-small",
	});
}

export default Component;
