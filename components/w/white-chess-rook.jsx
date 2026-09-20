import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrhvs_bzd.css';
import '../../css/t/t96o_g7bk.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/t/tm48l7mqj.css';
import '../../css/v/vf1omxbtp.css';
import '../../css/d/dlwzbjben.css';
import '../../css/i/i1_t8pbly.css';
import '../../css/t/tl4v0vbpt.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrhvs_bzd"/><path class="t96o_g7bk"/><g class="brzn_0bpr"><path class="tm48l7mqj"/><path class="vf1omxbtp"/><path class="dlwzbjben"/><path class="i1_t8pbly"/><path class="tl4v0vbpt"/></g>`,
		"fallback": "openmoji:white-chess-rook",
	});
}

export default Component;
