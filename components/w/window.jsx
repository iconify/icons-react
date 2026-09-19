import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_wvbn4-s.css';
import '../../css/b/bfe2smrhu.css';
import '../../css/x/xbdrabtly.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p_wvbn4-s"><path class="bfe2smrhu"/><path class="xbdrabtly"/></g>`,
		"fallback": "glyphs-poly:window",
	});
}

export default Component;
