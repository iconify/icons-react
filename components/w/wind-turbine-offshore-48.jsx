import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtzp5wbtj.css';
import '../../css/t/t4ohw1r8f.css';
import '../../css/x/xvaj_2byr.css';
import '../../css/k/k7lvh_brd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtzp5wbtj"/><path class="t4ohw1r8f"/><path class="xvaj_2byr"/><path class="k7lvh_brd"/>`,
		"fallback": "energy-icons:wind-turbine-offshore-48",
	});
}

export default Component;
