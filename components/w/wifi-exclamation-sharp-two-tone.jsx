import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/akajwubis.css';
import '../../css/y/yepmwko9k.css';
import '../../css/k/ksan_mr5a.css';
import '../../css/n/n2jrplbtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="akajwubis"/><path class="yepmwko9k"/><path class="ksan_mr5a"/><path class="n2jrplbtn"/></g>`,
		"fallback": "keyline-icons:wifi-exclamation-sharp-two-tone",
	});
}

export default Component;
