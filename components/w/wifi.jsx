import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft81j6ddr.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft81j6ddr"/>`,
		"fallback": "topcoat:wifi",
	});
}

export default Component;
