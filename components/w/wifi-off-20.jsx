import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj-8ynsln.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj-8ynsln"/>`,
		"fallback": "energy-icons:wifi-off-20",
	});
}

export default Component;
