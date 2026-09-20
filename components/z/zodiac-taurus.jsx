import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xio3gdtsm.css';
import '../../css/e/eyhrnt-2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xio3gdtsm"/><path class="eyhrnt-2v"/></g>`,
		"fallback": "tabler:zodiac-taurus",
	});
}

export default Component;
