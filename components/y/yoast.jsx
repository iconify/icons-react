import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2iqwz2ib.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2iqwz2ib"/>`,
		"fallback": "fa6-brands:yoast",
	});
}

export default Component;
