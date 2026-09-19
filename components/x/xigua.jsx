import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_d73bamf.css';
import '../../css/l/l0r8j72es.css';
import '../../css/m/m40vt8b2k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y_d73bamf"><path class="l0r8j72es"/><path class="m40vt8b2k"/></g>`,
		"fallback": "icon-park-outline:xigua",
	});
}

export default Component;
