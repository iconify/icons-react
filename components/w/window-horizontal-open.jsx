import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f6c2tj9bn.css';
import '../../css/r/r1j2eicsi.css';
import '../../css/c/cfk_ovbga.css';
import '../../css/o/og8zkpbwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="f6c2tj9bn"/><path class="r1j2eicsi"/><path class="cfk_ovbga"/><path class="og8zkpbwn"/></g>`,
		"fallback": "iconaut:window-horizontal-open",
	});
}

export default Component;
