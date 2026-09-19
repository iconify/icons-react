import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g06g2je2w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g06g2je2w"/>`,
		"fallback": "glyphs:z",
	});
}

export default Component;
