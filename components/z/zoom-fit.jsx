import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/taasc_mln.css';
import '../../css/e/eu8t76b8h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="taasc_mln"/><path class="eu8t76b8h"/>`,
		"fallback": "carbon:zoom-fit",
	});
}

export default Component;
