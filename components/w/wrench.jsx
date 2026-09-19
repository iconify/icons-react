import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci1sux1or.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ci1sux1or"/>`,
		"fallback": "f7:wrench",
	});
}

export default Component;
