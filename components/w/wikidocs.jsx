import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n26s6ub1x.css';
import '../../css/i/iadi1vbcc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n26s6ub1x"/><path class="iadi1vbcc"/>`,
		"fallback": "selfhst:wikidocs",
	});
}

export default Component;
