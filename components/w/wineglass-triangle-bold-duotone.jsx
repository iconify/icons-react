import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/le29hpbjw.css';
import '../../css/d/dxr69bcwt.css';
import '../../css/v/vck_s2eyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="le29hpbjw"/><path class="dxr69bcwt"/><path class="vck_s2eyt"/></g>`,
		"fallback": "solar:wineglass-triangle-bold-duotone",
	});
}

export default Component;
