import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0nui7ith.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z0nui7ith"/>`,
		"fallback": "glyphs:wifi-50-outline",
	});
}

export default Component;
