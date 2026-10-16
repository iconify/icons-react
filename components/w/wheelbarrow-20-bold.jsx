import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksschrb-d.css';
import '../../css/q/qy95ayb8d.css';
import '../../css/g/g3wis4bce.css';
import '../../css/t/tsy-snfbs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksschrb-d"/><path class="qy95ayb8d"/><path class="g3wis4bce"/><path class="tsy-snfbs"/>`,
		"fallback": "energy-icons:wheelbarrow-20-bold",
	});
}

export default Component;
