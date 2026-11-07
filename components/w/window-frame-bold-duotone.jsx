import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hao-y3_km.css';
import '../../css/s/siiu_ybwm.css';
import '../../css/p/ptrg_gs-t.css';
import '../../css/i/imlf68b1a.css';
import '../../css/w/wi89-ibup.css';
import '../../css/f/frr9dj5ie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hao-y3_km"/><path class="siiu_ybwm"/><path class="ptrg_gs-t"/><path class="imlf68b1a"/><path class="wi89-ibup"/><path class="frr9dj5ie"/>`,
		"fallback": "solar:window-frame-bold-duotone",
	});
}

export default Component;
