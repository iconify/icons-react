import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-4k5kb_d.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-4k5kb_d"/>`,
		"fallback": "fluent-mdl2:wheelchair",
	});
}

export default Component;
