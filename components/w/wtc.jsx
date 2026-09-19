import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/am_qhhbci.css';
import '../../css/h/h7p8jpp_k.css';
import '../../css/o/osu72-hwf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="am_qhhbci"/><path class="h7p8jpp_k"/><path class="osu72-hwf"/></g>`,
		"fallback": "cryptocurrency-color:wtc",
	});
}

export default Component;
