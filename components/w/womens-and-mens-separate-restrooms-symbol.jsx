import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amsqombxb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amsqombxb"/>`,
		"fallback": "pinhead:womens-and-mens-separate-restrooms-symbol",
	});
}

export default Component;
