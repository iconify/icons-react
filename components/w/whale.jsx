import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a4i6dabiz.css';
import '../../css/i/itsk313tz.css';
import '../../css/h/he1sk-rbq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a4i6dabiz"/><path class="itsk313tz"/><circle class="he1sk-rbq"/></g>`,
		"fallback": "icon-park:whale",
	});
}

export default Component;
