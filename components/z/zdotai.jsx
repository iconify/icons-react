import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpy9ok0_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpy9ok0_d"/>`,
		"fallback": "thesvg:zdotai",
	});
}

export default Component;
