import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxqr4bbni.css';
import '../../css/f/f752_u1ed.css';
import '../../css/u/ungc_tbic.css';
import '../../css/j/jqdg6w_dd.css';
import '../../css/f/fdunp569o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxqr4bbni"/><path class="f752_u1ed"/><path class="ungc_tbic"/><path class="jqdg6w_dd"/><path class="fdunp569o"/>`,
		"fallback": "selfhst:wiki-js-light",
	});
}

export default Component;
