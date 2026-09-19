import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlcqlxbna.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlcqlxbna"/>`,
		"fallback": "glyphs:wind-bold",
	});
}

export default Component;
