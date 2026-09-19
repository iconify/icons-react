import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tw-oxi3gx.css';
import '../../css/c/co1tuvbwd.css';
import '../../css/w/wjdawyy4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="tw-oxi3gx"/><path class="co1tuvbwd"/><path class="wjdawyy4v"/></g>`,
		"fallback": "hugeicons:workout-sport",
	});
}

export default Component;
