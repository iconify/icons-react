import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/v/vbf1v13kd.css';
import '../../css/g/g6f7wqbxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><rect transform="matrix(1 0 0 -1 14 10)" class="vbf1v13kd"/><path class="g6f7wqbxw"/></g>`,
		"fallback": "lets-icons:widget-alt-light",
	});
}

export default Component;
