import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xu9pm7r1o.css';
import '../../css/a/ao3z3hbnu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xu9pm7r1o"/><path class="ao3z3hbnu"/></g>`,
		"fallback": "bi:yin-yang",
	});
}

export default Component;
