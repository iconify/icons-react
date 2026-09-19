import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hlm0gmz7y.css';
import '../../css/n/nkhlq_a6i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hlm0gmz7y"/><path class="nkhlq_a6i"/></g>`,
		"fallback": "bi:window-dock",
	});
}

export default Component;
