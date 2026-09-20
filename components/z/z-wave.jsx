import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0z4q7cwr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0z4q7cwr"/>`,
		"fallback": "selfhst:z-wave",
	});
}

export default Component;
