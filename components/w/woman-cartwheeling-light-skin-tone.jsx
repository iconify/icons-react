import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hq1bfqbrr.css';
import '../../css/c/c5kg9pbyd.css';
import '../../css/l/lmk0_abjw.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/k/k--9pjhxt.css';
import '../../css/f/fvcjk13yc.css';
import '../../css/z/z0ze7-z9n.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hq1bfqbrr"><circle class="c5kg9pbyd"/><path class="lmk0_abjw"/></g><g class="brzn_0bpr"><circle class="k--9pjhxt"/><path class="fvcjk13yc"/><path class="z0ze7-z9n"/></g>`,
		"fallback": "openmoji:woman-cartwheeling-light-skin-tone",
	});
}

export default Component;
