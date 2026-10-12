import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-7cq1vev.css';
import '../../css/f/foqctbc1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i-7cq1vev"/><path class="foqctbc1l"/></g>`,
		"fallback": "lucide-extended:whistle-duotone",
	});
}

export default Component;
