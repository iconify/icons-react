import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/q/qmz_z15pg.css';
import '../../css/p/pjn3vtblj.css';
import '../../css/b/bgs7slbrn.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="qmz_z15pg"/><path class="pjn3vtblj"/><path class="bgs7slbrn"/></g>`,
		"fallback": "marketeq:work",
	});
}

export default Component;
