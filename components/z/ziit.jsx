import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgysx_b2w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgysx_b2w"/>`,
		"fallback": "selfhst:ziit",
	});
}

export default Component;
