import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xizt2jvwz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xizt2jvwz"/>`,
		"fallback": "glyphs-poly:zero",
	});
}

export default Component;
