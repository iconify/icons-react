import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j9xrx4b-n.css';
import '../../css/p/pjoafe4jy.css';
import '../../css/e/e3q9k7bzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j9xrx4b-n"/><path class="pjoafe4jy"/><path class="e3q9k7bzl"/></g>`,
		"fallback": "tabler:world-www",
	});
}

export default Component;
