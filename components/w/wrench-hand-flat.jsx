import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l-1lpg-uo.css';
import '../../css/b/b_5i33bsb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="l-1lpg-uo"/><path class="b_5i33bsb"/></g>`,
		"fallback": "streamline-flex-color:wrench-hand-flat",
	});
}

export default Component;
