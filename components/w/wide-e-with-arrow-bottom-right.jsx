import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wd_uy6b7c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wd_uy6b7c"/>`,
		"fallback": "pinhead:wide-e-with-arrow-bottom-right",
	});
}

export default Component;
