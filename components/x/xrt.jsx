import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2r_kg_ej.css';
import '../../css/t/tkbvg7s4e.css';
import '../../css/d/d6f1x5bln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a2r_kg_ej"/><path class="tkbvg7s4e"/><path class="d6f1x5bln"/>`,
		"fallback": "token:xrt",
	});
}

export default Component;
