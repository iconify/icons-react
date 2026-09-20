import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jl3-4dbji.css';
import '../../css/e/eors92b-g.css';
import '../../css/h/h8551tu4h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jl3-4dbji"/><path clip-rule="evenodd" class="eors92b-g"/><path clip-rule="evenodd" class="h8551tu4h"/></g>`,
		"fallback": "streamline-color:workspace-desk-flat",
	});
}

export default Component;
