import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/coajt-b7g.css';
import '../../css/i/iu_50qbof.css';
import '../../css/p/ps5bz1bxi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(0 2)" class="n1lsf0bnc"><circle class="coajt-b7g"/><path class="iu_50qbof"/><path class="ps5bz1bxi"/></g>`,
		"fallback": "si-glyph:wifi-1",
	});
}

export default Component;
