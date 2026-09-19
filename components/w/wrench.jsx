import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jefc31vvu.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jefc31vvu"/>`,
		"fallback": "si-glyph:wrench",
	});
}

export default Component;
