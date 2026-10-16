import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1h9j1hcr.css';
import '../../css/y/y497hebmi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1h9j1hcr"/><path class="y497hebmi"/>`,
		"fallback": "energy-icons:zero-emissions-20-bold",
	});
}

export default Component;
