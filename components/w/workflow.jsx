import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fckdq6bfn.css';
import '../../css/v/vafut1lep.css';
import '../../css/q/qgdjmdbhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="fckdq6bfn"/><path class="vafut1lep"/><path class="qgdjmdbhj"/></g>`,
		"fallback": "withicons-bauhaus:workflow",
	});
}

export default Component;
