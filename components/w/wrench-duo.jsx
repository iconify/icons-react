import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4b3ac4nj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4b3ac4nj"/>`,
		"fallback": "glyphs:wrench-duo",
	});
}

export default Component;
