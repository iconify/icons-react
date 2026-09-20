import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ere8b8b-s.css';
import '../../css/s/su2ci-bpz.css';
import '../../css/q/qyvbf9bgl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ere8b8b-s"/><path class="su2ci-bpz"/><path class="qyvbf9bgl"/>`,
		"fallback": "selfhst:zimaos",
	});
}

export default Component;
