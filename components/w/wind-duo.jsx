import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krwqt2j0q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krwqt2j0q"/>`,
		"fallback": "glyphs:wind-duo",
	});
}

export default Component;
