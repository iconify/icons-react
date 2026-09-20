import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ia4qhfxyu.css';
import '../../css/m/mrcbqcb_l.css';
import '../../css/g/g25hv4bvf.css';
import '../../css/x/xabmdwboi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ia4qhfxyu"/><path class="mrcbqcb_l"/><path class="g25hv4bvf"/><path class="xabmdwboi"/></g>`,
		"fallback": "streamline-kameleon-color:yen-coin-duo",
	});
}

export default Component;
