import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j7kn5jb8z.css';
import '../../css/b/bz49hkbpc.css';
import '../../css/n/n3_7dmu3k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j7kn5jb8z"/><path class="bz49hkbpc"/><circle class="n3_7dmu3k"/></g>`,
		"fallback": "icon-park-outline:whale",
	});
}

export default Component;
