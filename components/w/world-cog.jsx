import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qyd5e-bdr.css';
import '../../css/c/cg6vveb1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qyd5e-bdr"/><path class="cg6vveb1c"/></g>`,
		"fallback": "tabler:world-cog",
	});
}

export default Component;
