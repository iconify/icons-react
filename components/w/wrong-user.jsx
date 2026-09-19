import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/wf0awcb4d.css';
import '../../css/w/w_jkxrb5x.css';
import '../../css/w/wbyajk8_c.css';
import '../../css/g/g-kpebb9e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><circle class="wf0awcb4d"/><path class="w_jkxrb5x"/><path class="wbyajk8_c"/><path class="g-kpebb9e"/></g>`,
		"fallback": "icon-park:wrong-user",
	});
}

export default Component;
