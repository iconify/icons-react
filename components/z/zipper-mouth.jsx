import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bng7pxiak.css';
import '../../css/f/fpr969b1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bng7pxiak"/><path class="fpr969b1w"/>`,
		"fallback": "fontisto:zipper-mouth",
	});
}

export default Component;
