import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdidh17-p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdidh17-p"/>`,
		"fallback": "glyphs:zero-duo",
	});
}

export default Component;
