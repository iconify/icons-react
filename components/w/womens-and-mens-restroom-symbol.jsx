import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxg2fn1hw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxg2fn1hw"/>`,
		"fallback": "pinhead:womens-and-mens-restroom-symbol",
	});
}

export default Component;
