import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/j/j94xy58rw.css';
import '../../css/p/p3n94ouiw.css';
import '../../css/c/cswduybqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGGZOjkdPk" x1="9" x2="15" y1="3.35" y2="21.75" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGGZOjkdPk)" class="j94xy58rw"/><path class="p3n94ouiw wm-s"/><path class="cswduybqr wm-shine"/></g>`,
		"fallback": "withicons-utsav:witch-hat",
	});
}

export default Component;
