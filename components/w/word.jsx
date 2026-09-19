import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0c0s1bpx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0c0s1bpx"/>`,
		"fallback": "icons8:word",
	});
}

export default Component;
