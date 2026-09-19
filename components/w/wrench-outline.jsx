import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr86svbag.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hr86svbag"/>`,
		"fallback": "glyphs:wrench-outline",
	});
}

export default Component;
