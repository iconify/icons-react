import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/z5xnrgtsv.css';
import '../../css/g/gcwkl5bcj.css';
import '../../css/q/q2afrlb6o.css';
import '../../css/k/kjgpvobgb.css';
import '../../css/h/h0tj1xbrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco z5xnrgtsv"/><path class="gcwkl5bcj wm-deco"/><path class="q2afrlb6o wm-deco"/><path class="kjgpvobgb"/><path class="h0tj1xbrb"/></g>`,
		"fallback": "withicons:wheat-blueprint",
	});
}

export default Component;
