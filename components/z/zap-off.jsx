import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/h/h16ujl6ka.css';
import '../../css/i/if_om9_xf.css';
import '../../css/o/of71r7btf.css';
import '../../css/t/tx6cyq3wg.css';
import '../../css/a/a0x5nbbqt.css';
import '../../css/m/mplv7kbbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGFXzhPeEy" x1="10" x2="14" y1="1.52" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="h16ujl6ka wm-k"/><path class="if_om9_xf wm-deco"/><path fill="url(#SVGFXzhPeEy)" class="of71r7btf wm-k"/><path class="tx6cyq3wg wm-shadow"/><path class="a0x5nbbqt wm-shine"/><path class="mplv7kbbm wm-shine"/></g>`,
		"fallback": "withicons-valentine:zap-off",
	});
}

export default Component;
