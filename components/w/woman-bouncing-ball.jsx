import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4u8pbwjc.css';
import '../../css/g/gv2jg9b1e.css';
import '../../css/y/yuyqw092u.css';
import '../../css/w/wirx-vw_t.css';
import '../../css/y/y_bdzbbsw.css';
import '../../css/d/d-1bj9mxq.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/q/q9q3peckd.css';
import '../../css/i/ilxd_fp_b.css';
import '../../css/l/lqke8manv.css';
import '../../css/n/nxvx1klrg.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="x4u8pbwjc"><circle class="gv2jg9b1e"/><path class="yuyqw092u"/><path class="wirx-vw_t"/><path class="y_bdzbbsw"/></g><circle class="d-1bj9mxq"/><g class="brzn_0bpr"><circle class="q9q3peckd"/><circle class="ilxd_fp_b"/><path class="lqke8manv"/><path class="nxvx1klrg"/></g>`,
		"fallback": "openmoji:woman-bouncing-ball",
	});
}

export default Component;
