import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wob_gub2q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wob_gub2q"/>`,
		"fallback": "glyphs:zero-bold",
	});
}

export default Component;
