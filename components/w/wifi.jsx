import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pi6j8fbyn.css';
import '../../css/z/zdodfpb-u.css';
import '../../css/r/r90ulhg7s.css';
import '../../css/r/r0i5eubba.css';
import '../../css/h/hrbh0mbeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="pi6j8fbyn wm-shadow"/><path class="zdodfpb-u"/><path class="r90ulhg7s"/><path class="r0i5eubba"/><path class="hrbh0mbeo"/></g>`,
		"fallback": "withicons-retro:wifi",
	});
}

export default Component;
