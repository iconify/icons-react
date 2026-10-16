import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc1420b7v.css';
import '../../css/t/tdu9i01lj.css';
import '../../css/o/onir-4bul.css';
import '../../css/m/mjlwt_b5d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc1420b7v"/><path class="tdu9i01lj"/><path class="onir-4bul"/><path class="mjlwt_b5d"/>`,
		"fallback": "energy-icons:yaw-48-bold",
	});
}

export default Component;
