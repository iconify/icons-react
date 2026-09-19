import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldvkl4b8l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldvkl4b8l"/>`,
		"fallback": "glyphs:wifi-100",
	});
}

export default Component;
