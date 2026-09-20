import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/i/ita_uwbar.css';
import '../../css/u/urrkr9byt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="ita_uwbar"/><path class="urrkr9byt"/></g>`,
		"fallback": "streamline-sharp-color:webcam-video",
	});
}

export default Component;
