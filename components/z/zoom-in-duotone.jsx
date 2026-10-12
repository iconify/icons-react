import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p68t-_bma.css';
import '../../css/j/jeqtdlb7k.css';
import '../../css/b/bjjvl09jm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p68t-_bma"/><path class="jeqtdlb7k"/><path class="bjjvl09jm"/></g>`,
		"fallback": "lucide-extended:zoom-in-duotone",
	});
}

export default Component;
