import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qbqb8dbzx.css';
import '../../css/e/eluil0d0a.css';
import '../../css/q/q-vx2_fhp.css';
import '../../css/y/ynxylc7rt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qbqb8dbzx"/><path class="eluil0d0a"/><path class="q-vx2_fhp"/><path class="ynxylc7rt"/></g>`,
		"fallback": "iconaut:zodiac-scorpio",
	});
}

export default Component;
