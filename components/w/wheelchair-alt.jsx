import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m18m25u6z.css';

const viewBox = {"width":1408,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m18m25u6z"/>`,
		"fallback": "fa:wheelchair-alt",
	});
}

export default Component;
