import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2r0fbbed.css';

const viewBox = {"width":717,"height":709};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2r0fbbed"/>`,
		"fallback": "ls:wrench",
	});
}

export default Component;
