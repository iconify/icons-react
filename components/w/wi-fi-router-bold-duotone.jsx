import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g018bh3lq.css';
import '../../css/y/yi63wokxr.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/u/uoxlnw9ea.css';
import '../../css/y/y3xlt_b-b.css';
import '../../css/d/d5joaknns.css';
import '../../css/h/h-3cnj94t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g018bh3lq"/><path class="yi63wokxr"/><g class="xtpeb-edw"><path class="uoxlnw9ea"/><path class="y3xlt_b-b"/><path class="d5joaknns"/><path class="h-3cnj94t"/></g>`,
		"fallback": "solar:wi-fi-router-bold-duotone",
	});
}

export default Component;
