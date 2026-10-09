import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s31pbgi7y.css';
import '../../css/m/mxan4gp1r.css';
import '../../css/v/vp9gn9sho.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s31pbgi7y"/><path class="mxan4gp1r"/><path class="vp9gn9sho"/>`,
		"fallback": "energy-icons:wifi-48",
	});
}

export default Component;
