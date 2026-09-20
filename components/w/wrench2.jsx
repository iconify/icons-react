import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avsd8cb1s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avsd8cb1s"/>`,
		"fallback": "raphael:wrench2",
	});
}

export default Component;
