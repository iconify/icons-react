import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uccg79b_y.css';
import '../../css/q/qr81ltbbr.css';
import '../../css/q/q76b1ztlq.css';
import '../../css/j/j2_-2hp4c.css';
import '../../css/k/kcx9-ebpv.css';
import '../../css/d/dbfozsbzp.css';
import '../../css/p/p2hq0gbyt.css';
import '../../css/d/dkkc8m1kg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uccg79b_y"/><path class="qr81ltbbr"/><path class="q76b1ztlq"/><path class="j2_-2hp4c"/><path class="kcx9-ebpv"/><path class="dbfozsbzp"/><path class="p2hq0gbyt"/><path class="dkkc8m1kg"/>`,
		"fallback": "energy-icons:wind-turbine-plus-20",
	});
}

export default Component;
