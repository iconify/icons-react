import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y6ks5jlxv.css';
import '../../css/a/a0ocguycj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="y6ks5jlxv"/><path class="a0ocguycj"/></g>`,
		"fallback": "cryptocurrency-color:xzc",
	});
}

export default Component;
