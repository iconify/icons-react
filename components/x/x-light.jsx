import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruzq9dyfy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruzq9dyfy"/>`,
		"fallback": "selfhst:x-light",
	});
}

export default Component;
