import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/a/auv1wpb8c.css';
import '../../css/p/puhknjl3i.css';
import '../../css/s/sdyp_4liq.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="auv1wpb8c"/><path class="puhknjl3i"/><path class="sdyp_4liq"/></g>`,
		"fallback": "marketeq:wifi",
	});
}

export default Component;
