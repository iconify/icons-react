import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbme2ub2k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbme2ub2k"/>`,
		"fallback": "pinhead:wheelie-bin-and-apple-core",
	});
}

export default Component;
