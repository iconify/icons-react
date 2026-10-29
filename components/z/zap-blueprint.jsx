import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/kp5oeubfs.css';
import '../../css/x/x_vd_wbdc.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/m/mkwu02oja.css';
import '../../css/e/e3772k5pm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="kp5oeubfs wm-deco"/><path class="wm-deco x_vd_wbdc"/><path class="rbzq4bjzv wm-deco"/><path class="mkwu02oja"/><path class="e3772k5pm"/></g>`,
		"fallback": "withicons:zap-blueprint",
	});
}

export default Component;
