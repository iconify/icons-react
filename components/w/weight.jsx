import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/m38_0qbnh.css';
import '../../css/a/aszzpubda.css';
import '../../css/w/wkao2cchc.css';
import '../../css/j/js_069bdg.css';
import '../../css/t/toxz99mob.css';
import '../../css/o/o1b0ulbii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="m38_0qbnh wm-shadow"/><path class="aszzpubda"/><path class="wkao2cchc"/><path class="js_069bdg"/><path class="toxz99mob"/><path class="o1b0ulbii"/></g>`,
		"fallback": "withicons-retro:weight",
	});
}

export default Component;
