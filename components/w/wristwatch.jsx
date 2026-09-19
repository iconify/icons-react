import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wbkdetb-c.css';
import '../../css/k/kwm-i6kdf.css';
import '../../css/p/p1ezbcjat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wbkdetb-c"/><path class="kwm-i6kdf"/><path class="p1ezbcjat"/></g>`,
		"fallback": "iconoir:wristwatch",
	});
}

export default Component;
