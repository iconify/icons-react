import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/s/swr15-bau.css';
import '../../css/a/aqg76zdxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="swr15-bau"/><path class="aqg76zdxx"/></g>`,
		"fallback": "streamline-ultimate:work-from-home-user-pet-cat",
	});
}

export default Component;
