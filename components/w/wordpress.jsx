import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zs1djybzo.css';
import '../../css/n/nm1t5obly.css';
import '../../css/g/gs4hihbsw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zs1djybzo"/><path class="nm1t5obly"/><path class="gs4hihbsw"/></g>`,
		"fallback": "bi:wordpress",
	});
}

export default Component;
