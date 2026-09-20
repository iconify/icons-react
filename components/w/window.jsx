import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/w/ws0ssqbrc.css';
import '../../css/s/sfa22v-tf.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="ws0ssqbrc"/><path class="sfa22v-tf"/></g>`,
		"fallback": "marketeq:window",
	});
}

export default Component;
