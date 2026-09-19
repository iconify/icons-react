import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozcrb8bxw.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozcrb8bxw"/>`,
		"fallback": "fa7-brands:xbox",
	});
}

export default Component;
