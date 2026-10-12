import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xx-35ubhc.css';
import '../../css/z/zi1ixv7tj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xx-35ubhc"/><path class="zi1ixv7tj"/></g>`,
		"fallback": "lucide-extended:weight-duotone",
	});
}

export default Component;
