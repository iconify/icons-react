import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bxul51whc.css';
import '../../css/z/zi1ixv7tj.css';
import '../../css/n/nzz3gj_2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bxul51whc"/><path class="zi1ixv7tj"/><path class="nzz3gj_2n"/></g>`,
		"fallback": "lucide-extended:weight-tilde-duotone",
	});
}

export default Component;
