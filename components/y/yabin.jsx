import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk_y2-bpv.css';
import '../../css/k/k7rs5ub2m.css';
import '../../css/b/ba7212etj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk_y2-bpv"/><path class="k7rs5ub2m"/><path class="ba7212etj"/>`,
		"fallback": "selfhst:yabin",
	});
}

export default Component;
