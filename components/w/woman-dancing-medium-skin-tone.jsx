import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9pq-abme.css';
import '../../css/t/tjb7s8_am.css';
import '../../css/p/pg609h32h.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/y/yv-iidcey.css';
import '../../css/k/kvik-yb-w.css';
import '../../css/d/ddhnwibdu.css';
import '../../css/d/dm0zs2a_x.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k9pq-abme"><circle class="tjb7s8_am"/><path class="pg609h32h"/></g><g class="brzn_0bpr"><circle class="yv-iidcey"/><path class="kvik-yb-w"/><path class="ddhnwibdu"/><path class="dm0zs2a_x"/></g>`,
		"fallback": "openmoji:woman-dancing-medium-skin-tone",
	});
}

export default Component;
