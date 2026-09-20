import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1_jxnbyr.css';
import '../../css/w/wd4oq0bpn.css';
import '../../css/q/qcvutebjv.css';
import '../../css/d/dsxj58m2y.css';
import '../../css/e/egfmomgzr.css';
import '../../css/b/blcy1tb-o.css';
import '../../css/b/bfbx99bex.css';
import '../../css/r/rjq58ib4w.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1_jxnbyr"/><path class="wd4oq0bpn"/><path class="qcvutebjv"/><path class="dsxj58m2y"/><path class="egfmomgzr"/><path class="blcy1tb-o"/><path class="bfbx99bex"/><path class="rjq58ib4w"/>`,
		"fallback": "openmoji:woman-tipping-hand",
	});
}

export default Component;
