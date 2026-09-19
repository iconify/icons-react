import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cj37cfdcm.css';
import '../../css/b/bt02zq94i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="cj37cfdcm"/><path class="bt02zq94i"/></g>`,
		"fallback": "si-glyph:wheel-steel",
	});
}

export default Component;
