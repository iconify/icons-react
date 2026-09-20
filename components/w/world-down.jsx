import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y59_sl96v.css';
import '../../css/u/umfrd_4mw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y59_sl96v"/><path class="umfrd_4mw"/></g>`,
		"fallback": "tabler:world-down",
	});
}

export default Component;
