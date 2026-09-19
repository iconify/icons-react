import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/iau7cvb8h.css';
import '../../css/p/pw-9paarv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="iau7cvb8h"/><path class="pw-9paarv"/></g>`,
		"fallback": "icon-park:weixin-market",
	});
}

export default Component;
