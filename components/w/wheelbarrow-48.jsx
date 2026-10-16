import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qf0byjgog.css';
import '../../css/n/n183aem4t.css';
import '../../css/j/j8-wilb9p.css';
import '../../css/u/ufvhl4bgl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qf0byjgog"/><path class="n183aem4t"/><path class="j8-wilb9p"/><path class="ufvhl4bgl"/>`,
		"fallback": "energy-icons:wheelbarrow-48",
	});
}

export default Component;
