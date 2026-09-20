import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn0wiolsr.css';
import '../../css/b/bcj4m3bdn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="wn0wiolsr"/><path class="bcj4m3bdn"/>`,
		"fallback": "selfhst:wizarr",
	});
}

export default Component;
