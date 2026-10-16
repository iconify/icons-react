import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kllrszb1h.css';
import '../../css/q/q6laauggs.css';
import '../../css/d/d3uhlcbil.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kllrszb1h"/><path class="q6laauggs"/><path class="d3uhlcbil"/>`,
		"fallback": "energy-icons:xor-gate-48-bold",
	});
}

export default Component;
