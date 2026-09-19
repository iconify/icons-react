import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcvh03bkn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcvh03bkn"/>`,
		"fallback": "fluent-emoji-high-contrast:woman-dancing",
	});
}

export default Component;
