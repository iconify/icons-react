import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mt6ba2bga.css';
import '../../css/t/t-5vfcbmo.css';
import '../../css/i/ihsle8fcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mt6ba2bga"/><path class="t-5vfcbmo"/><path class="ihsle8fcv"/></g>`,
		"fallback": "reicon:widget-add-duotone",
	});
}

export default Component;
