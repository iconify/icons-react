import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3f_nlpyo.css';

const viewBox = {"width":462,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3f_nlpyo"/>`,
		"fallback": "file-icons:webpack",
	});
}

export default Component;
