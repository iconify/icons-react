import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cu3mpubxb.css';
import '../../css/h/h1yfsbbri.css';
import '../../css/s/swnd4bc0h.css';
import '../../css/g/gqpdb0bqp.css';
import '../../css/p/p1i8lv2nu.css';

const viewBox = {"width":215,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cu3mpubxb"/><path clip-rule="evenodd" class="h1yfsbbri"/><path class="swnd4bc0h"/><path class="gqpdb0bqp"/><path clip-rule="evenodd" class="p1i8lv2nu"/></g>`,
		"fallback": "thesvg-color:webdotdev",
	});
}

export default Component;
