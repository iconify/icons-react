import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrb495m5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrb495m5r"/>`,
		"fallback": "thesvg:wemo",
	});
}

export default Component;
