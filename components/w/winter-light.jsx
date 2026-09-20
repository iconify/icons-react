import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/ons53cb4g.css';
import '../../css/v/v__bi6tvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="ons53cb4g"/><path class="v__bi6tvw"/></g>`,
		"fallback": "lets-icons:winter-light",
	});
}

export default Component;
