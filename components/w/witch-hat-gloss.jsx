import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/beofq4bqo.css';
import '../../css/c/cfbsrmb4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="beofq4bqo wm-k"/><path class="cfbsrmb4h wm-k"/></g>`,
		"fallback": "withicons:witch-hat-gloss",
	});
}

export default Component;
