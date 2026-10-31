import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/x/x3ej9i-oq.css';
import '../../css/m/mj61g7jii.css';
import '../../css/o/ozjkdu0on.css';
import '../../css/g/gd0naobgk.css';
import '../../css/u/u6yfpbb3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="x3ej9i-oq"/><path class="mj61g7jii wm-shine"/><path class="ozjkdu0on wm-k"/><path class="gd0naobgk wm-a"/><path class="u6yfpbb3m wm-deco"/></g>`,
		"fallback": "withicons-kawaii:webcam",
	});
}

export default Component;
