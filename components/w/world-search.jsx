import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dw-9ceu9o.css';
import '../../css/t/t4eckzb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dw-9ceu9o"/><path class="t4eckzb5j"/></g>`,
		"fallback": "tabler:world-search",
	});
}

export default Component;
