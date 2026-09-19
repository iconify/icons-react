import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g016nwbgf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g016nwbgf"/>`,
		"fallback": "fluent-emoji-flat:yellow-square",
	});
}

export default Component;
