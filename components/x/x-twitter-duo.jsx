import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjsousb0m.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/eq99g89vg.css';
import '../../css/h/he_l--bdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary sjsousb0m"/><g class="dt0cm9dhy primary"><path class="eq99g89vg"/><path class="he_l--bdl"/></g>`,
		"fallback": "iconaut:x-twitter-duo",
	});
}

export default Component;
