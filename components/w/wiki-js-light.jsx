import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajvc1_b-l.css';
import '../../css/u/unwic5qnb.css';
import '../../css/b/bj2guyupp.css';
import '../../css/j/jqdg6w_dd.css';
import '../../css/d/dttu61bfx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajvc1_b-l"/><path class="unwic5qnb"/><path class="bj2guyupp"/><path class="jqdg6w_dd"/><path class="dttu61bfx"/>`,
		"fallback": "selfhst:wiki-js-light",
	});
}

export default Component;
