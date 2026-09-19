import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9zmu4brs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9zmu4brs"/>`,
		"fallback": "glyphs:z-bold",
	});
}

export default Component;
