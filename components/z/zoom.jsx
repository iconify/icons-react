import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfgvlmb-n.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfgvlmb-n"/>`,
		"fallback": "fa7-brands:zoom",
	});
}

export default Component;
