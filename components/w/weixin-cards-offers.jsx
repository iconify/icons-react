import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/wekqk_h-v.css';
import '../../css/k/k9nw8bhlc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="wekqk_h-v"/><path class="k9nw8bhlc"/></g>`,
		"fallback": "icon-park:weixin-cards-offers",
	});
}

export default Component;
