import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/iwz_6mbwo.css';
import '../../css/r/rexxn0bul.css';
import '../../css/r/r4tet7bfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="iwz_6mbwo"/><path class="rexxn0bul"/><path class="r4tet7bfm"/></g>`,
		"fallback": "solar:winrar-line-duotone",
	});
}

export default Component;
