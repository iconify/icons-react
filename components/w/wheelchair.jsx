import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/idmny45iu.css';
import '../../css/y/y5tf1hbcj.css';
import '../../css/q/q0hi-bbwb.css';
import '../../css/g/gwqdfgu-c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="idmny45iu"/><path class="y5tf1hbcj"/><path class="q0hi-bbwb"/><path class="gwqdfgu-c"/></g>`,
		"fallback": "icon-park:wheelchair",
	});
}

export default Component;
