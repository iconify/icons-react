import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9pq-abme.css';
import '../../css/c/c_mm67w9u.css';
import '../../css/o/oa6ev-b6d.css';
import '../../css/p/p3tqp8bvt.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/b/b_r-507tg.css';
import '../../css/y/y0sk7pbrk.css';
import '../../css/i/ijdsekb1m.css';
import '../../css/j/jc6g5n8nu.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k9pq-abme"><circle class="c_mm67w9u"/><path class="oa6ev-b6d"/></g><path class="p3tqp8bvt"/><g class="brzn_0bpr"><path class="b_r-507tg"/><path class="y0sk7pbrk"/><circle class="ijdsekb1m"/><path class="jc6g5n8nu"/></g>`,
		"fallback": "openmoji:woman-swimming-medium-skin-tone",
	});
}

export default Component;
