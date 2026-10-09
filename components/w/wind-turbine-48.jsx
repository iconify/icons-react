import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd4dh8bjv.css';
import '../../css/j/jj2_wx93l.css';
import '../../css/q/qcz5hxzpp.css';
import '../../css/m/mfwba6bar.css';
import '../../css/g/gahhorbof.css';
import '../../css/u/uexx27b5d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd4dh8bjv"/><path class="jj2_wx93l"/><path class="qcz5hxzpp"/><path class="mfwba6bar"/><path class="gahhorbof"/><path class="uexx27b5d"/>`,
		"fallback": "energy-icons:wind-turbine-48",
	});
}

export default Component;
