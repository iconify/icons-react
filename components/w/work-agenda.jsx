import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/x/x-ve4pbcd.css';
import '../../css/r/rw-8t_d6o.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="x-ve4pbcd"/><path class="rw-8t_d6o"/></g>`,
		"fallback": "marketeq:work-agenda",
	});
}

export default Component;
