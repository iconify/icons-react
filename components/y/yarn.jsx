import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5hj_1brq.css';
import '../../css/d/d6up25bex.css';
import '../../css/z/ziil8acyu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p5hj_1brq"><path transform="matrix(.1608 0 0 .16076 -.053 -.054)" class="d6up25bex"/><path transform="matrix(.1608 0 0 .16076 -.053 -.054)" class="ziil8acyu"/></g>`,
		"fallback": "catppuccin:yarn",
	});
}

export default Component;
