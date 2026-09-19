import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1757qb7a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1757qb7a"/>`,
		"fallback": "glyphs-poly:yield-sign",
	});
}

export default Component;
