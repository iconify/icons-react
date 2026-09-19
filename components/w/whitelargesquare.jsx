import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gln9e_ezj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gln9e_ezj"/>`,
		"fallback": "fxemoji:whitelargesquare",
	});
}

export default Component;
