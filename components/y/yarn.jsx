import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa_fzkb0g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oa_fzkb0g"/>`,
		"fallback": "la:yarn",
	});
}

export default Component;
