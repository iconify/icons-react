import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdfli1b4k.css';
import '../../css/j/j3rnxybvr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdfli1b4k"/><path class="j3rnxybvr"/>`,
		"fallback": "selfhst:willow",
	});
}

export default Component;
