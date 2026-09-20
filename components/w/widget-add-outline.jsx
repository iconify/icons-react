import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jehqprakg.css';
import '../../css/g/g3r-5n4tt.css';
import '../../css/p/pzb_wabum.css';
import '../../css/d/d09--6peh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jehqprakg"/><path class="g3r-5n4tt"/><path clip-rule="evenodd" class="pzb_wabum"/><path clip-rule="evenodd" class="d09--6peh"/></g>`,
		"fallback": "solar:widget-add-outline",
	});
}

export default Component;
