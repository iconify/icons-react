import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t_owy1dlv.css';
import '../../css/a/a1dbd2dld.css';
import '../../css/e/ekllxobep.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t_owy1dlv"/><path class="a1dbd2dld"/><path class="ekllxobep"/></g>`,
		"fallback": "bi:window-x",
	});
}

export default Component;
