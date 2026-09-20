import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uoz8gj51b.css';
import '../../css/r/r4yc04bmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uoz8gj51b"/><path class="r4yc04bmu"/></g>`,
		"fallback": "tabler:wood",
	});
}

export default Component;
