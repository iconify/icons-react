import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jjl2wueme.css';
import '../../css/i/iyl1lejag.css';
import '../../css/r/r9u8fhbku.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><g transform="translate(2 1)"><ellipse class="jjl2wueme"/><path class="iyl1lejag"/></g><path class="r9u8fhbku"/></g>`,
		"fallback": "si-glyph:webcam",
	});
}

export default Component;
