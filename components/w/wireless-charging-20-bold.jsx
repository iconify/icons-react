import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9abdnbmo.css';
import '../../css/q/q2o__te3v.css';
import '../../css/g/g4vsmpb-w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9abdnbmo"/><path class="q2o__te3v"/><path class="g4vsmpb-w"/>`,
		"fallback": "energy-icons:wireless-charging-20-bold",
	});
}

export default Component;
