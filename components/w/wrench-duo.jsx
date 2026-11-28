import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_xmpxb6b.css';
import '../../css/n/nkm2n0b6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_xmpxb6b secondary"/><path class="nkm2n0b6m primary"/>`,
		"fallback": "iconaut:wrench-duo",
	});
}

export default Component;
