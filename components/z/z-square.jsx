import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2wgzk62w.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2wgzk62w"/>`,
		"fallback": "vs:z-square",
	});
}

export default Component;
