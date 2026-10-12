import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ga6_k34_o.css';
import '../../css/u/u50bmlwji.css';
import '../../css/i/i-vtnuatc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ga6_k34_o"/><path class="u50bmlwji"/><path class="i-vtnuatc"/></g>`,
		"fallback": "lucide-extended:wifi-pen-duotone",
	});
}

export default Component;
