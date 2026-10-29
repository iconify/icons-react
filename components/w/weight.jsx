import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wgzulu_dc.css';
import '../../css/i/isc-82puh.css';
import '../../css/m/mio0oybsc.css';
import '../../css/k/kye5ot6dv.css';
import '../../css/o/oimp6g-4n.css';
import '../../css/v/v58hby3rh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wgzulu_dc wm-shadow"/><path class="isc-82puh"/><path class="mio0oybsc"/><path class="kye5ot6dv"/><path class="oimp6g-4n wm-shine"/><path class="v58hby3rh wm-deco"/></g>`,
		"fallback": "withicons-sticker:weight",
	});
}

export default Component;
