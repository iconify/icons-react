import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yq7s1mbrn.css';
import '../../css/r/rh8b5jbev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yq7s1mbrn"/><path class="rh8b5jbev"/></g>`,
		"fallback": "tabler:world-heart",
	});
}

export default Component;
