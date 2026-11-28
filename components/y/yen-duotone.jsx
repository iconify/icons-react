import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/so9r8691g.css';
import '../../css/p/pi_iz6k_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary so9r8691g"/><path class="pi_iz6k_p primary"/></g>`,
		"fallback": "iconaut:yen-duotone",
	});
}

export default Component;
