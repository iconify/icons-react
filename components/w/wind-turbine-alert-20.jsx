import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uccg79b_y.css';
import '../../css/j/jf-zp2p0m.css';
import '../../css/x/x6rb1_bom.css';
import '../../css/u/uw-55pedx.css';
import '../../css/r/r__jq3blf.css';
import '../../css/s/s9o2plion.css';
import '../../css/d/dqgervd7r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uccg79b_y"/><path class="jf-zp2p0m"/><path class="x6rb1_bom"/><path class="uw-55pedx"/><path class="r__jq3blf"/><path class="s9o2plion"/><path class="dqgervd7r"/>`,
		"fallback": "energy-icons:wind-turbine-alert-20",
	});
}

export default Component;
