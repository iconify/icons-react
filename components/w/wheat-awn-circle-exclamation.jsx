import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um1cdwptq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um1cdwptq"/>`,
		"fallback": "fa7-solid:wheat-awn-circle-exclamation",
	});
}

export default Component;
