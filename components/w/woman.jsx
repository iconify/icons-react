import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcyvurbju.css';
import '../../css/z/zy09reb_v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="bcyvurbju"/><path class="zy09reb_v"/>`,
		"fallback": "ion:woman",
	});
}

export default Component;
