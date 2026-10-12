import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z0w-cmb6o.css';
import '../../css/q/q_3zgfjru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z0w-cmb6o"/><path class="q_3zgfjru"/></g>`,
		"fallback": "lucide-extended:wheat-duotone",
	});
}

export default Component;
