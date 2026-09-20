import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-8ww2bwf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-8ww2bwf"/>`,
		"fallback": "selfhst:zorin-os",
	});
}

export default Component;
