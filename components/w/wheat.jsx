import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3gkpbbqb.css';
import '../../css/k/k74tf4blx.css';
import '../../css/u/u641ei6rn.css';
import '../../css/v/vfjhrab0p.css';
import '../../css/z/zd_9skniz.css';
import '../../css/e/eds2nn52w.css';
import '../../css/y/yh936mhbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3gkpbbqb wm-shadow"/><path class="k74tf4blx wm-a"/><path class="u641ei6rn wm-k"/><path class="vfjhrab0p wm-k"/><path class="wm-k zd_9skniz"/><path class="eds2nn52w wm-k"/><path class="wm-shine yh936mhbg"/>`,
		"fallback": "withicons-pastel:wheat",
	});
}

export default Component;
