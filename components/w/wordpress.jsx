import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atcc8608c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atcc8608c"/>`,
		"fallback": "formkit:wordpress",
	});
}

export default Component;
