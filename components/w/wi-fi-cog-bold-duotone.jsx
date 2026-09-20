import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/o/opi0yfbgs.css';
import '../../css/o/okacui53b.css';
import '../../css/o/oie1f-bec.css';
import '../../css/g/g4-9uukja.css';
import '../../css/f/faoe3kvrs.css';
import '../../css/m/mffls5bqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="opi0yfbgs"/><path class="okacui53b"/><path class="oie1f-bec"/><path class="g4-9uukja"/><path class="faoe3kvrs"/></g><path class="mffls5bqh"/></g>`,
		"fallback": "solar:wi-fi-cog-bold-duotone",
	});
}

export default Component;
