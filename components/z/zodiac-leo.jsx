import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/avyze60iz.css';
import '../../css/t/tpz-0f0vd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="avyze60iz"/><path class="tpz-0f0vd"/></g>`,
		"fallback": "tabler:zodiac-leo",
	});
}

export default Component;
