import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/ydtohebyk.css';
import '../../css/j/jl_v0zi-o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="ydtohebyk"/><path class="jl_v0zi-o"/></g>`,
		"fallback": "cryptocurrency-color:xmr",
	});
}

export default Component;
