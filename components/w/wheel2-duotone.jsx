import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pqzuqrbno.css';
import '../../css/v/v-788abjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pqzuqrbno"/><path class="v-788abjz"/></g>`,
		"fallback": "reicon:wheel2-duotone",
	});
}

export default Component;
