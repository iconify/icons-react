import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/mc8rtl3wh.css';
import '../../css/b/b8uh54bhe.css';
import '../../css/c/chh9m8bfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="mc8rtl3wh"/><path class="b8uh54bhe"/><path class="chh9m8bfh"/></g>`,
		"fallback": "keyline-icons:wifi-medium-sharp-duotone",
	});
}

export default Component;
