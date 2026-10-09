import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up8_hjm1g.css';
import '../../css/k/k_6prvftm.css';
import '../../css/q/qljqqy97f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="up8_hjm1g"/><path class="k_6prvftm"/><path class="qljqqy97f"/>`,
		"fallback": "energy-icons:whisk-48",
	});
}

export default Component;
