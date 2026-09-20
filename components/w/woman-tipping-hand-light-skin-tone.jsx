import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1_jxnbyr.css';
import '../../css/q/q4o06ab2r.css';
import '../../css/h/hcmgffb-z.css';
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
		"content": `<path class="o1_jxnbyr"/><path class="q4o06ab2r"/><path class="hcmgffb-z"/><path class="dsxj58m2y"/><path class="egfmomgzr"/><path class="blcy1tb-o"/><path class="bfbx99bex"/><path class="rjq58ib4w"/>`,
		"fallback": "openmoji:woman-tipping-hand-light-skin-tone",
	});
}

export default Component;
