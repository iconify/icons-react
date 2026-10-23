import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r6c-ylb-j.css';
import '../../css/n/nmzcp8s6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r6c-ylb-j"/><path class="nmzcp8s6h"/></g>`,
		"fallback": "lucide-extended:wifi-lock-duotone",
	});
}

export default Component;
