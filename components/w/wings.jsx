import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/budxb8tgx.css';
import '../../css/d/d26v317vg.css';
import '../../css/v/v1osumnlh.css';
import '../../css/m/m04k14b0z.css';
import '../../css/t/t-qe7ekev.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="budxb8tgx"/><g class="d26v317vg"><path class="v1osumnlh"/><path class="m04k14b0z"/><path class="t-qe7ekev"/></g></g>`,
		"fallback": "cryptocurrency-color:wings",
	});
}

export default Component;
