import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fv5om0q-p.css';
import '../../css/m/mni1jebdp.css';
import '../../css/x/xfp-xlb4q.css';
import '../../css/r/rizu8j4vh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fv5om0q-p"/><path class="mni1jebdp"/><path class="xfp-xlb4q"/><path class="rizu8j4vh"/></g>`,
		"fallback": "streamline-cyber-color:wind-flag",
	});
}

export default Component;
