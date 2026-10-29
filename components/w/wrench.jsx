import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u331cobja.css';
import '../../css/j/jwk6asbwt.css';
import '../../css/l/lpftj47-a.css';
import '../../css/h/h8e_jfbop.css';
import '../../css/w/wo5s_8bvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u331cobja wm-k"/><path class="jwk6asbwt wm-k"/><path class="lpftj47-a wm-k"/><path class="h8e_jfbop wm-shine"/><path class="wm-k wo5s_8bvz"/></g>`,
		"fallback": "withicons-anime:wrench",
	});
}

export default Component;
