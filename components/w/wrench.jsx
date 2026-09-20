import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/l/let6yl3zn.css';
import '../../css/k/k4zt1db7t.css';
import '../../css/p/p8mmaebvw.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="let6yl3zn"/><path class="k4zt1db7t"/><path class="p8mmaebvw"/></g>`,
		"fallback": "streamline-stickies-color:wrench",
	});
}

export default Component;
