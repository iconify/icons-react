import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0zn-7b3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0zn-7b3r"/>`,
		"fallback": "thesvg-color:zcool",
	});
}

export default Component;
