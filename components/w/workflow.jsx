import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vs-2r5b3n.css';
import '../../css/f/fqrlsyb2r.css';
import '../../css/t/tncdg9b2d.css';
import '../../css/c/ch3sfwbmn.css';
import '../../css/u/ueu3wqlam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vs-2r5b3n wm-shadow"/><path class="fqrlsyb2r"/><path class="tncdg9b2d"/><path class="ch3sfwbmn"/><path class="ueu3wqlam"/></g>`,
		"fallback": "withicons-retro:workflow",
	});
}

export default Component;
