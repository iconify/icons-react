import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzeym_bsl.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzeym_bsl"/>`,
		"fallback": "foundation:widget",
	});
}

export default Component;
