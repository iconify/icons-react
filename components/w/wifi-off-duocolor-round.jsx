import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p52u7fomt.css';
import '../../css/k/kus8t0b2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p52u7fomt"/><path class="kus8t0b2k"/></g>`,
		"fallback": "coolicons:wifi-off-duocolor-round",
	});
}

export default Component;
