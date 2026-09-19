import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fck1plbjy.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fck1plbjy"/>`,
		"fallback": "si-glyph:wind-turbines",
	});
}

export default Component;
