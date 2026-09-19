import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u5ytslu4k.css';
import '../../css/j/je6svqzqh.css';
import '../../css/r/rkuupdbyq.css';
import '../../css/u/uh5if_b0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="u5ytslu4k"/><path class="je6svqzqh"/><path class="rkuupdbyq"/><path class="uh5if_b0o"/></g>`,
		"fallback": "hugeicons:wifi-connected-01",
	});
}

export default Component;
