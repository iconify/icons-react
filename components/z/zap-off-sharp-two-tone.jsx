import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/oj2nsqbfe.css';
import '../../css/u/u4yq_hb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="oj2nsqbfe"/><path class="u4yq_hb5r"/></g>`,
		"fallback": "keyline-icons:zap-off-sharp-two-tone",
	});
}

export default Component;
