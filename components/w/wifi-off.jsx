import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/i/ib7_r3bwf.css';
import '../../css/l/l2sj8fbjg.css';
import '../../css/o/o_psy_3hp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGgTjCRb6x" x1="0" x2="0" y1="2.01" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVG29AnoGGI" x1="1.24" x2="22.77" y1="2.01" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGgTjCRb6x)" stroke="url(#SVG29AnoGGI)" class="ib7_r3bwf wm-k"/><path stroke="url(#SVG29AnoGGI)" class="l2sj8fbjg wm-s"/><path class="o_psy_3hp wm-shine"/></g>`,
		"fallback": "withicons-lunar:wifi-off",
	});
}

export default Component;
