import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnwbcdcds.css';
import '../../css/r/rxia6zz2s.css';
import '../../css/p/pn4l7ibkh.css';
import '../../css/g/g21cvrbjf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnwbcdcds"/><path class="rxia6zz2s"/><path class="pn4l7ibkh"/><path class="g21cvrbjf"/>`,
		"fallback": "energy-icons:wood-pole-20-bold",
	});
}

export default Component;
