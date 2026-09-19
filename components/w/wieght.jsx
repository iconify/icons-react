import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbm03u4xk.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbm03u4xk"/>`,
		"fallback": "si-glyph:wieght",
	});
}

export default Component;
